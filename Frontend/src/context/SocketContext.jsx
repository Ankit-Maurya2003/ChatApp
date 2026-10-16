import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState([]);
  const { AuthUser } = useAuth();

  useEffect(() => {

    // AuthUser nahi hai to socket mat banao
    if (!AuthUser?.user?._id) {
      setSocket(null);
      setOnline([]);
      return;
    }

    const newSocket = io("https://chatapp-e3x9.onrender.com", {
      query: {
        userId: AuthUser.user._id,
      },
      withCredentials: true,
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

  }, [AuthUser]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);