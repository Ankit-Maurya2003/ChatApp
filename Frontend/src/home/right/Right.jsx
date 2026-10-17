import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import { useAuth } from "../../context/AuthProvider";
import userConversation from "../../zustand/UserConversation";

const Right = () => {
  const { AuthUser } = useAuth();

  const { selectedConversation } = userConversation();

  return (
    <div className="w-full h-full bg-slate-900 text-gray-300 overflow-hidden">

      {!selectedConversation ? (

        /* Welcome Screen */
        <div className="w-full h-full flex items-center justify-center px-4">
          <p className="text-center text-lg">
            Welcome{" "}
            <span className="font-semibold">
              {AuthUser?.user?.fullname}
            </span>

            <br />

            <span className="text-sm text-gray-400">
              No any User Selected For Chat
            </span>
          </p>
        </div>

      ) : (

        /* Chat Screen */
        <div className="w-full h-screen flex flex-col">

          {/* Chat Header */}
          <div className="w-full shrink-0">
            <ChatUser />
          </div>

          {/* Messages - ONLY THIS WILL SCROLL */}
          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
            <Messages />
          </div>

          {/* Message Input */}
          <div className="w-full shrink-0">
            <TypeSend />
          </div>

        </div>

      )}

    </div>
  );
};

export default Right;