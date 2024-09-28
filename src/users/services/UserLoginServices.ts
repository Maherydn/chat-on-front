import axios, { AxiosResponse } from 'axios';

// Créer une instance d'Axios pour l'API
const userApi = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Exporter les interfaces
export interface User {
    username: string;
    password: string;
}

export interface UserData {
    token: string;
    refresh_token: string;
}


// Fonction pour se connecter
export const login = async (userData: User): Promise<UserData> => {
    try {
        const res: AxiosResponse<UserData> = await userApi.post('/login_check', userData);
        return res.data; 
    } catch (error) {
        console.error('Erreur lors de la tentative de connexion:', error);
        throw error;
    }
};
