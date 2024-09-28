import { AxiosResponse } from "axios";
import { conversationApi } from "./authServices";


export interface UserCurrentData {  
    id: number;
    username: string;
}

export const currentUser = async (): Promise<UserCurrentData> => {
    try {
        const res: AxiosResponse<UserCurrentData> = await conversationApi.get(`/me`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        throw error;
    }
};