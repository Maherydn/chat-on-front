import { AxiosResponse } from "axios";
import { conversationApi } from "./authServices";

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
        const res: AxiosResponse<Conversations[]> = await conversationApi.get('/conversation');
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};

// Fonction pour lire  conversation + messages
export const readConversation = async (id:number | undefined): Promise<Conversation[]> => {
    try {
        const res: AxiosResponse<Conversation[]> = await conversationApi.get(`/conversation/${id}`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};


