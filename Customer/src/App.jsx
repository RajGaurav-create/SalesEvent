import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Registered from "./Registered";
import Validate from "./Validate";
import Dashboard from "./Dashboard"


function App() {
  const[otp,setOtp] = useState("")
  const[user,setUser] = useState("")

  return (
    <Routes>
      <Route path="/" element={<Login setOtp={setOtp} />} />
      <Route path="/register" element={<Registered />} />
      <Route path="/validate" element={<Validate otp={otp} setUser={setUser}/>} />
      <Route path="/dashboard" element={<Dashboard user={user}/>} />
</Routes>
  );
}

export default App;
