import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const navigate = useNavigate();


  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/doctors/login",
        {
          email: email.trim(),
          password: password.trim(),
        }
      );

      localStorage.setItem("doctorId", res.data.doctor._id);
      nav("/doctor/dashboard");

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="center">
      <div className="card">
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

        <h2>Doctor Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
