import axios, { AxiosResponse } from 'axios';

// Créer une instance d'Axios pour l'API des conversations
const conversationApi = axios.create({
    baseURL: 'http://localhost:8000/user/conversation',
});

// Exporter les interfaces
export interface Sender {
    id: number;
    username: string;
}

export interface LastMessage {
    id: number;
    content: string;
    sender: Sender;
}

export interface Conversations {  // Assurez-vous que tout est exporté
    id: number;
    title: string;
    lastMessage: LastMessage;
    isGroups: boolean
}

export interface Conversation {  
    id: number;
    content: string;
    sender: Sender;
}

// Fonction pour lire les conversations
export const readConversations = async (): Promise<Conversations[]> => {
    try {
        const res: AxiosResponse<Conversations[]> = await conversationApi.get('');
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};

// Fonction pour lire  conversation + messages
export const readConversation = async (id:number | undefined): Promise<Conversation[]> => {
    try {
        const res: AxiosResponse<Conversation[]> = await conversationApi.get(`/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};
