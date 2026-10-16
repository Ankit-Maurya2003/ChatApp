import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserGetAllUser from "../../context/UserGetAllUser";
import userConversation from "../../zustand/UserConversation";
import toast from "react-hot-toast";

const Serach = () => {
  const [search, setSearch] = useState("");

  const [ AllUser ] = UserGetAllUser();

  const { setSelectedConversation } = userConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchText = search.toLowerCase().trim();

    const user = AllUser?.find((user) =>
      user.fullname?.toLowerCase().includes(searchText)
    );

    if (user) {
      setSelectedConversation(user);
      setSearch("");
    } else {
      toast.success("User not found");
    }
  };

  return (
    <div className="py-2 bg-black">
      <div className="px-3">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">

            <label className="input w-[80%] gap-2 outline-none">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
                placeholder="Search"
              />
            </label>

            <button type="submit">
              <FaSearch className="hover:bg-gray-600 rounded-full p-2 text-5xl duration-300" />
            </button>

          </div>
        </form>

        <div>
          <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md shrink-0">
            Message
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Serach;