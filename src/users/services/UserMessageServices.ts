import axios, { AxiosResponse } from 'axios';

// Créer une instance d'Axios pour l'API des conversations
const conversationApi = axios.create({
    baseURL: 'http://localhost:8000/user/message',
});

export interface Sender {
    id: number
}

export interface Message {  
    content: string;
    conversationId: number | undefined ;
    sender: Sender
}

// Fonction pour lire les conversations
export const sendMessage = async (message: Message): Promise<Message[]> => {
    try {
        const res: AxiosResponse<Message[]> = await conversationApi.post('/create', message);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};
