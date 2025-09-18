import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AuthPage.css";

function AuthPage() {
  const [mode, setMode] = useState("login");  // login | register | forgot
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    newPassword: ""
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully! Please login.");
      setMode("login");
    } catch (err) {
      alert(err.response?.data?.message || "Server error");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password
      });
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Server error");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", {
        email: form.email,
        newPassword: form.newPassword
      });
      alert("Password reset successful! Please login.");
      setMode("login");
    } catch (err) {
      alert(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="auth-container">

      {mode === "login" && (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <span onClick={() => setMode("register")}>Register</span><br/>
            Forgot password? <span onClick={() => setMode("forgot")}>Reset Password</span>
          </p>
        </>
      )}

      {mode === "register" && (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Full Name" onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <input type="text" placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
            <input type="text" placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <span onClick={() => setMode("login")}>Login</span>
          </p>
        </>
      )}

      {mode === "forgot" && (
        <>
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <input type="email" placeholder="Your Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="New Password" onChange={e => setForm({ ...form, newPassword: e.target.value })} required />
            <button type="submit">Reset Password</button>
          </form>
          <p>
            Remembered your password? <span onClick={() => setMode("login")}>Login</span>
          </p>
        </>
      )}

    </div>
  );
}

export default AuthPage;
