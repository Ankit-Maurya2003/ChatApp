import React from 'react'
import Signup from './component/Signup';
import Login from './component/Login';
import { useAuth } from './context/AuthProvider';
import { Navigate, Route,Routes, } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import Home from './Home';
const App = () => {
  const{AuthUser} = useAuth();



  
  return (
    <>

     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={AuthUser?(<Home/>):(<Navigate to = "/login"/>)} />
    </Routes>
    <Toaster />

      
     
    </>
  )
}

export default App
