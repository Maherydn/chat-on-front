import React, { createContext, useContext, useState, useEffect } from "react";
import { Conversations } from "../services/UserConversationServices";

interface DiscussionContextType {
  activeDiscussion: Conversations | null;
  setActiveDiscussion: (discussion: Conversations) => void;
}

const DiscussionContext = createContext<DiscussionContextType | undefined>(undefined);

export const useDiscussion = () => {
  const context = useContext(DiscussionContext);
  if (!context) {
    throw new Error("useDiscussion doit être utilisé dans un DiscussionProvider");
  }
  return context;
};

export const DiscussionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [activeDiscussion, setActiveDiscussion] = useState<Conversations | null>(() => {
    const savedDiscussion = localStorage.getItem("activeDiscussion");
    return savedDiscussion ? JSON.parse(savedDiscussion) : null;

  });

  useEffect(() => {
    if (activeDiscussion) {
      localStorage.setItem("activeDiscussion", JSON.stringify(activeDiscussion));
    } else {
      localStorage.removeItem("activeDiscussion");
    }
  }, [activeDiscussion]);

  return (
    <DiscussionContext.Provider value={{ activeDiscussion, setActiveDiscussion }}>
      {children}
    </DiscussionContext.Provider>
  );
};
