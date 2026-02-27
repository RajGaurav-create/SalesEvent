import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Validate({ otp, setUser }) {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const onClicking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/valid", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: token, // ✅ raw string
        credentials: "include",
      });

      if (!response.ok) {
        navigate("/");
        return;
      }

      const data = await response.json();
      setUser(data.name);
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onClicking}>
        <label htmlFor="token">Enter the OTP</label>

        <input
          type="text"
          id="token"
          placeholder="Enter OTP"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        <button type="submit">Verify</button>
      </form>

      <p className="otp_holder">OTP (for testing): {otp}</p>
    </div>
  );
}

export default Validate;
