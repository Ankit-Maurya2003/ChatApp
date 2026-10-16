import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import userConversation from "./zustand/UserConversation";

const Home = () => {
  const { selectedConversation } = userConversation();

  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-black">

      <div className="grid w-full h-full grid-cols-1 md:grid-cols-10">

        {/* LEFT */}
        <div
          className={`
            w-full h-full md:col-span-3
            ${selectedConversation ? "hidden md:block" : "block"}
          `}
        >
          <Left />
        </div>

        {/* RIGHT */}
        <div
          className={`
            w-full h-full md:col-span-7
            ${selectedConversation ? "block" : "hidden md:block"}
          `}
        >
          <Right />
        </div>

      </div>
    </div>
  );
};

export default Home;