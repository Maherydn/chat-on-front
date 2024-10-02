import React, { createContext, useContext, useState } from "react";

export interface User {
  userId: number;
  socketId: string;
  username: string;
}

interface ConnectedUsersContextType {
  connectedUsers: User[] | null;
  setConnectedUsers: (connectedUsers: User[] ) => void;
}

const ConnectedUsersContext = createContext<ConnectedUsersContextType | undefined>(undefined);

export const useConnectedUsersContext = () => {
  const context = useContext(ConnectedUsersContext);
  if (!context) {
    throw new Error("useConnectedUsersContext doit être utilisé dans un ConnectedUsersProvider");
  }
  return context;
};

export const ConnectedUsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connectedUsers, setConnectedUsers] = useState<User[]>([]);

  return (
    <ConnectedUsersContext.Provider value={{ connectedUsers, setConnectedUsers }}>
      {children}
    </ConnectedUsersContext.Provider>
  );
};
