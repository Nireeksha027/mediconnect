import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const navigate = useNavigate();

  


  const login = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      nav("/admin/dashboard");
    } else {
      alert("Invalid Admin");
    }
  };

 return (
  <div className="center">
    <div className="card">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Admin Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary-btn" onClick={login}>
        Login
      </button>
    </div>
  </div>
);

}
