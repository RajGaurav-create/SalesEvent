import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Login({ setOtp }) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const subSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
        credentials: "include"
      })

      const data = await response.json()

      if (response.ok) {
        setOtp(data.otp)   // or data.otp
        navigate("/validate")
      } else {
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Something went wrong")
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={subSubmit}>
        <label>UserName</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <Link to="/register">Add new User</Link>

      {error && <p className="login-error">{error}</p>}
    </div>
  )
}

export default Login
