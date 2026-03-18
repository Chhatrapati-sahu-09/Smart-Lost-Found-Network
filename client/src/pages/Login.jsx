/**
 * Login Component
 * User login form that authenticates against the backend API
 * On success: stores JWT token in localStorage and redirects to dashboard
 * On error: displays error message from server
 */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Form state for email and password
  const [form, setForm] = useState({ email: "", password: "" });
  // Error message state for displaying API errors
  const [error, setError] = useState("");
  // React Router navigation hook
  const navigate = useNavigate();

  /**
   * Handle input field changes
   * Updates form state with field name and value
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Handle form submission
   * Sends login credentials to backend API
   * Saves JWT token to localStorage on success
   * Displays error message on failure
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to login endpoint
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );
      // Store JWT token for authenticated requests
      localStorage.setItem("token", res.data.token);
      alert("Login Success");
      // Redirect to dashboard after login
      navigate("/dashboard");
    } catch (err) {
      // Display error message from server or generic fallback
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/register" style={styles.link}>
            Register here
          </a>
        </p>
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
  },
  formBox: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  error: {
    color: "#dc3545",
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#f8d7da",
    borderRadius: "4px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};
