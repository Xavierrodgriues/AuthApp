import { Route, Routes } from "react-router";
import AuthForm from "./components/AuthForm"
import { ToastContainer } from 'react-toastify';
import UserData from "./components/UserData";
import { useState } from "react";
import type { RegisterInput } from "./types/RegisterInput";

const App = () => {
  const [regUser, setRegUser] = useState<RegisterInput []>([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthForm regUser={regUser} setRegUser={setRegUser}/>}/>
        <Route path="/users" element={<UserData regUser={regUser} setRegUser={setRegUser}/>}/>
      </Routes>
        
        <ToastContainer  position="top-center"/>
    </div>
  )
}

export default App