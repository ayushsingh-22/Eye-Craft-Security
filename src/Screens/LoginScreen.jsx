import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Using React Router's navigation

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("red");
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate(); // For programmatic navigation

  // Check login status on component mount
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/check-login", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        
        if (data.authenticated) {
          navigate("/dashboard"); // Use React Router instead of window.location
        }
      } catch (err) {
        console.log("Error checking login status:", err);
      } finally {
        setIsLoading(false); // Always stop loading
      }
    };

    checkLogin();
  }, [navigate]);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMsgColor("green");
        setMsg(data.message || "Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMsgColor("red");
        setMsg(data.error || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setMsgColor("red");
      setMsg("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading indicator while initial check is happening
  if (isLoading) {
    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <p>Checking login status...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {msg && (
          <p style={{ ...styles.message, color: msgColor }}>{msg}</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f3f3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginBox: {
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
  },
  message: {
    marginTop: "15px",
    fontWeight: "500",
  },
};

export default AdminLogin;