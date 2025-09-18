import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/AuthPage.css";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration Successful! Please Login.");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
        <input type="text" placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
        <input type="text" placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
