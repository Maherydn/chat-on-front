import React, { createContext, useContext, useState, useEffect } from "react";
import { Conversations } from "../services/UserConversationServices";

// Définir le type du contexte
interface DiscussionContextType {
  activeDiscussion: Conversations | null;
  setActiveDiscussion: (discussion: Conversations) => void;
}

// Créer le contexte avec une valeur par défaut (null ou une implémentation fictive)
const DiscussionContext = createContext<DiscussionContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useDiscussion = () => {
  const context = useContext(DiscussionContext);
  if (!context) {
    throw new Error("useDiscussion doit être utilisé dans un DiscussionProvider");
  }
  return context;
};

// Fournisseur du contexte pour englober l'application
export const DiscussionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Charger la discussion active depuis localStorage lors de l'initialisation
  const [activeDiscussion, setActiveDiscussion] = useState<Conversations | null>(() => {
    const savedDiscussion = localStorage.getItem("activeDiscussion");
    return savedDiscussion ? JSON.parse(savedDiscussion) : null;
  });

  // Sauvegarder la discussion active dans localStorage chaque fois qu'elle change
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
