import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState([]);
  const { AuthUser } = useAuth();

  useEffect(() => {
    if (AuthUser) {
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: AuthUser.user._id
        }
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUser", (users) => {
       
        setOnline(users);
      });

      return () => {
        newSocket.disconnect();
        setSocket(null);
        setOnline([]);
      };
    }

    setSocket(null);
    setOnline([]);

  }, [AuthUser]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);