import { AxiosResponse } from "axios";
import { conversationApi } from "./authServices";


export interface Sender {
    id: number
}

export interface Message {  
    content: string;
    conversationId: number | undefined ;
    sender: Sender | undefined
}

// Fonction pour lire les conversations
export const sendMessage = async (message: Message): Promise<Message[]> => {
    try {
        const res: AxiosResponse<Message[]> = await conversationApi.post('/message/create', message);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};
