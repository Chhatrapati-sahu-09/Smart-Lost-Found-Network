import { Link } from "react-router-dom";

export default function Landing() {
  const token = localStorage.getItem("token");

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Smart Lost & Found Network</h1>
        <p style={styles.subtitle}>
          Connecting people who lost items with those who found them.
        </p>

        <div style={styles.buttonGroup}>
          {token ? (
            <Link to="/dashboard" style={styles.primaryButton}>
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" style={styles.primaryButton}>
                Login
              </Link>
              <Link to="/register" style={styles.secondaryButton}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    width: "90%",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  primaryButton: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  secondaryButton: {
    padding: "12px 24px",
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
};
