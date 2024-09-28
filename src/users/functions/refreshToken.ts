import axios from "axios";

export const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');  
    if (!refreshToken) {
        throw new Error('Aucun refresh token disponible');
    }

    try {
        const response = await axios.post('http://localhost:8000/api/token/refresh', {
            refresh_token: refreshToken
        });

        const newAccessToken = response.data.token;
        const newRefreshToken = response.data.refresh_token;

        // Stocker les nouveaux tokens
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        return newAccessToken; // Retourner le nouveau token d'accès
    } catch (error) {
        console.error("Erreur lors du rafraîchissement du token", error);
        throw error;
    }
};