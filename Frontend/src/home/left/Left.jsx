import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

const Left = () => {
  return (
    <div className="w-full h-full text-gray-300 bg-black flex flex-col overflow-hidden">

      {/* Search */}
      <div className="w-full shrink-0 z-50">
        <Search />
      </div>

      {/* Users */}
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
        <Users />
      </div>

      {/* Logout */}
      <div className="w-full shrink-0">
        <Logout />
      </div>

    </div>
  );
};

export default Left;