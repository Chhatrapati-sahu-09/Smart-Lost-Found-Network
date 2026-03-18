import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard</h2>
        <p>You are logged in successfully.</p>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "420px",
  },
  button: {
    marginTop: "1rem",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1f6feb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },
};
