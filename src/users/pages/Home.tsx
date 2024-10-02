import { useEffect, useState } from "react";
import { Chat } from "../components/chat/Chat";
import { Conversation } from "../components/conversation/Conversation";
import { SideBar } from "../components/sidebar/SideBar";
import { io, Socket } from 'socket.io-client';
import { currentUser, UserCurrentData } from "../services/userServices";
import { useConnectedUsersContext } from "../hooks/ConnectedUsersContext";



export const Home: React.FC = () => {
  const [currentUserData, setUserCurrentData] = useState<UserCurrentData | undefined>(undefined);
  const { connectedUsers, setConnectedUsers } = useConnectedUsersContext();

  // Console log pour débogage
  console.log(connectedUsers);

  // Récupération des données de l'utilisateur courant
  useEffect(() => {
    const fetchUserCurrentData = async () => {
      try {
        const userData: UserCurrentData = await currentUser();
        setUserCurrentData(userData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
      }
    };

    fetchUserCurrentData();
  }, []);

  // Écoute des événements Socket.IO une fois que les données de l'utilisateur sont disponibles
  useEffect(() => {
    // Initialisation de Socket.IO
    const socket: Socket = io('http://localhost:3000');

    if (currentUserData) {
      const userId = currentUserData.id;
      const username = currentUserData.username; 
  
      // Émettre l'événement de connexion de l'utilisateur
      socket.emit('registerUser', { userId, username ,socketId: socket.id }); // Émettre avec socketId

      // Mettre à jour la liste des utilisateurs connectés
        socket.on('updateUserList', (users) => {
          setConnectedUsers(users);
        });

     // Utilisation de setConnectedUsers avec la fonction de mise à jour correcte
     socket.on('userDisconnected', ({ userId }) => {
      // Créer un nouveau tableau sans l'utilisateur déconnecté
      const updatedUsers = connectedUsers?.filter((user) => user.userId !== userId) || [];
    
      setConnectedUsers(updatedUsers);
    });
    
      return () => {
        socket.off('userConnected');
        socket.off('updateUserList');
        socket.off('userDisconnected');
      };
    }
  }, [currentUserData]);

  // Fonction pour vérifier si un utilisateur est connecté
  const isConnected = (userId: number): boolean => {
    return connectedUsers?.some(connectUser => connectUser.userId === userId) || false;
  };

  console.log(isConnected(1));
  console.log(isConnected(2));
  console.log(isConnected(3)); 

  return (
    <>
      <main className="h-screen overflow-hidden flex items-center justify-center">
        <div className="flex flex-row h-screen w-screen antialiased text-gray-800">
          <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
            <SideBar />
            <Conversation />
          </div>
          <Chat />
        </div>
      </main>
    </>
  );
};
