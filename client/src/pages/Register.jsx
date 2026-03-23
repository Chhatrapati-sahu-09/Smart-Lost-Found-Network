/**
 * Register Component
 * User registration form that creates a new account
 * On success: redirects user to login page
 * On error: displays error message from server
 *
 * Fields: name, email (unique), password (will be hashed on backend)
 */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // Form state with name, email, and password fields
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  // Error message state for displaying API errors
  const [error, setError] = useState("");
  // React Router navigation hook
  const navigate = useNavigate();

  /**
   * Handle input field changes
   * Updates form state with dynamic field names
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Handle form submission
   * Sends registration data to backend API
   * Password is hashed on backend by bcryptjs
   * On success: redirects to login page
   * On error: displays error message
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to register endpoint
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered Successfully! Please login.");
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      // Display error message from server or generic fallback
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Register</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
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
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Login here
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
    backgroundColor: "#28a745",
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
