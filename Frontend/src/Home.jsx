import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import userConversation from "./zustand/UserConversation";
const Home = () => {
  const{selectedConversation}=userConversation();
  return (
    <>
      <div className="grid grid-cols-10 h-screen ">
      <div className={`md:col-span-3  origin-top col-span-10 ${selectedConversation?"scale-0  duration-300":"scale-100  duration-300"} md:block  md:scale-100`} >
          <Left />
      </div>
        <div className={`md:col-span-7  origin-bottom col-span-10 ${!selectedConversation?"scale-0  duration-300":"scale-100  duration-300"} md:block  md:scale-100`}>
          <Right />
        </div>
      </div>
    </>
  );
};

export default Home;