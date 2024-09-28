import React, { useEffect, useState } from "react"
import { ConversationFilters } from "./ConversationFilters"
import { SearchBtn } from "./SearchBtn"
import { ConversationItem } from "./ConversationItem"
import { AddBtn } from "./AddBtn"
import { readConversations } from '../../services/UserConversationServices'; // Pas d'importation de `Conversation` ici
import type { Conversations } from '../../services/UserConversationServices'; 
import { useDiscussion } from "../../hooks/DiscussionContext"


export const Conversation:React.FC = () => {

  const { setActiveDiscussion } = useDiscussion();
  const handleSetActiveDiscussion = (discussion: Conversations) => {
  
    setActiveDiscussion(discussion);
  };

  const [ conversationData, setConversationData ] = useState<Conversations[] | undefined>()

  useEffect(() => {
    const fetchConversations = async () => {
        try {
            const data = await readConversations();
            setConversationData(data);
        } catch (error) {
            console.error('Erreur lors de la mise à jour des conversations:', error);
        }
    };
    

    fetchConversations();
}, []); 



  return (
    <>
        <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <div className="text-xl font-semibold">Messages</div>
            <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
          </div>
          <div className="ml-auto">
            <SearchBtn />
          </div>
        </div>
        <div className="mt-5">
          <ConversationFilters />
        </div>
        
        <div className="mt-5">
          <div className="text-xs text-gray-400 font-semibold uppercase">Personal</div>
        </div>
        <div className="h-full overflow-hidden relative pt-2">
          <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
            
          {
              conversationData && conversationData.map(
                (data) => <ConversationItem 
                  key={data.id}
                  conversationId={data.id}
                  onclick={() => handleSetActiveDiscussion(data)} 
                  time={null}
                  initial="U"
                  title={ data.title }
                  content={ data?.lastMessage?.content }
                  count={undefined}
                />)
            }

            

            
          </div>
          <div className="absolute bottom-0 right-0 mr-2">
            <AddBtn />
          </div>
        </div>
      </div>
    </>
  )
}
