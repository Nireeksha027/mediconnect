import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">MediConnect</h1>
      <p className="home-subtitle">
        Medical Appointment System
      </p>

      <div className="home-buttons">
        <button onClick={() => navigate("/admin/login")}>
          Admin
        </button>

        <button onClick={() => navigate("/doctor/login")}>
          Doctor
        </button>

        <button onClick={() => navigate("/patient/login")}>
          Patient
        </button>
      </div>
    </div>
  );
}

export default Home;
