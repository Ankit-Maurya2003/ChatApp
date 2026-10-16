import React from "react";
import User from "./User";
import UserGetAllUser from "../../context/UserGetAllUser";

const Users = () => {
  const [AllUser,loading]=UserGetAllUser();


  
  return (
    <div >
      
    

      <div className="mt-10">
        {AllUser.map((user,index)=>(
          <User key={index} user={user}/>
        ))}
      </div>

    </div>
  );
};

export default Users;