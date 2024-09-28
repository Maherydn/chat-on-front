import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client'; 
import { ChatHeaderItems } from './ChatHeaderItems';
import { ChatTitle } from './ChatTitle';
import { ChatMessage } from './ChatMessage';
import { ChatAudioBtn } from './ChatAudioBtn';
import { ChatInput } from './ChatInput';
import { ChatInputBtns } from './ChatInputBtns';
import { Conversation, readConversation } from '../../services/UserConversationServices';
import { useDiscussion } from '../../hooks/DiscussionContext';
import { Message, sendMessage } from '../../services/UserMessageServices';
import { currentUser, UserCurrentData } from '../../services/userServices';

const socket: Socket = io('http://localhost:3000'); 

export const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>(''); 
  const [conversationData, setConversationData] = useState<Conversation[]>([]); 
  const [currentUserData, setUserCurrentData] = useState<UserCurrentData | undefined>(undefined);
  
  const { activeDiscussion } = useDiscussion();
  const discussionId: number | undefined = activeDiscussion?.id;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  
  const joinRoom = (roomId: number | undefined) => { 
    socket.emit('joinRoom', roomId); 
  };  
  

useEffect(() => {
  const fetchUserCurrentData = async () => {
    try {
      const currentUserData: UserCurrentData = await currentUser();
      setUserCurrentData(currentUserData);
    } catch (error) {
      console.log("Erreur lors de la récupération des données utilisateur:", error);
    }
  };

  fetchUserCurrentData();
}, []);
  

  useEffect(() => {

    if (discussionId !== undefined) {
      const fetchConversations = async () => {
        try {
          const data = await readConversation(discussionId); 
          setConversationData(data);
        } catch (error) {
          console.error('Erreur lors de la mise à jour des conversations:', error);
        }
      };

      fetchConversations();
    }
  }, [discussionId]); 

  useEffect(() => {
    joinRoom(discussionId);


    socket.on('message', (msg: Message) => {
      if (msg) {
        setConversationData((prevMessages) => [...prevMessages, msg as unknown as Conversation]); 
      }
    });

    return () => {
      socket.off('message'); 
    };
  }, [discussionId]); 

  const handleSendMessage = async () => {
    const newMessage: Message = {
      content: message,
      conversationId: activeDiscussion?.id,
      sender: undefined
    }

    try {
      
      const msg = await sendMessage(newMessage); 
      
      socket.emit('message', { conversationId: activeDiscussion?.id, msg: msg }); 
      setMessage(''); 
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  };

  

  return (
    <>
      <div className="flex flex-col h-full w-full bg-white px-4 py-6">
        {!activeDiscussion ? (
          <div className='flex justify-center items-center '>
            <img src='dazai.jpg' className='rounded-lg hover:scale-105 duration-300' />
          </div>
        ) : (
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <ChatTitle 
              initial='U'
              title={activeDiscussion?.title}
              status='active'
            />
            <ChatHeaderItems />
          </div>
        )}
        <div className="h-full overflow-hidden py-4">
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-12 gap-y-2">
              {conversationData.map((data, index) => (
                <ChatMessage
                  key={index}
                  // utilisateur connecter
                  currentUserId={currentUserData?.id}
                  senderId={data.sender.id}
                  initial='D'
                  content={data.content}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
            <ChatAudioBtn />
            <ChatInput 
              value={message} 
              onChange={handleChange} 
            />
            <ChatInputBtns />
          </div>
          <div className="ml-6">
            <button 
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-indigo-300 hover:scale-110 duration-300 text-indigo-600"
              onClick={handleSendMessage}
            >
              <svg className="w-5 h-5 transform rotate-90 -mr-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
