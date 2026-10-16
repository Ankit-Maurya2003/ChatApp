import React from 'react'
import Cookies from 'js-cookie'
import { createContext,useContext,useState } from 'react'
const AuthContext = createContext();
 export const AuthProvider = ({children}) => {
    const initialData = Cookies.get("jwt")||localStorage.getItem("ChatApp");
    const [AuthUser,setAuthUser] = useState(
        initialData?JSON.parse(initialData):undefined
    )
  return (
    <AuthContext.Provider value={{AuthUser,setAuthUser}}>
     {children}
    </AuthContext.Provider>
  
  )
}
export const useAuth = ()=> useContext(AuthContext)