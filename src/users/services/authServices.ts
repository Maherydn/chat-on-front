import axios from "axios";
import { refreshToken } from "../functions/refreshToken";

export const conversationApi = axios.create({
    baseURL: 'http://localhost:8000/api/user/',
});

// Ajouter un interceptor pour injecter le token à chaque requête
conversationApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');  // Récupérer le token dynamiquement
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Ajouter le token dans les headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

conversationApi.interceptors.response.use(
    (response) => response,  // On retourne la réponse si elle est correcte
    async (error) => {
        const originalRequest = error.config;

        // Vérifier si l'erreur est due à un token expiré (statut 401)
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Marquer la requête pour éviter des boucles infinies

            try {
                const newToken = await refreshToken();  // Rafraîchir le token
                axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`; // Mettre à jour le header avec le nouveau token

                // Refaire la requête avec le nouveau token
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return axios(originalRequest);
            } catch (error) {
                console.error("Erreur lors du rafraîchissement du token ou de la réauthentification", error);
                return Promise.reject(error); // Si le refresh échoue, rejeter l'erreur
            }
        }

        // Si l'erreur n'est pas 401 ou qu'elle ne peut pas être gérée, rejeter l'erreur
        return Promise.reject(error);
    }
);