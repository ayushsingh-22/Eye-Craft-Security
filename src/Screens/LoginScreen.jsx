import React, { useEffect, useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("red");

  // 🔍 Check login status on component mount
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/check-login", {
          method: "GET",
          credentials: "include", // ✅ Important for sending cookies
        });

        if (res.ok) {
          window.location.href = "/dashboard";
        }
      } catch (err) {
        console.log("Not logged in yet.");
      }
    };

    checkLogin();
  }, []);

  // 🚀 Login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ Allow cookies to be set
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMsgColor("green");
        setMsg(data.message);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        setMsgColor("red");
        setMsg("Invalid Credentials. Please try again.");
      }
    } catch (err) {
      setMsgColor("red");
      setMsg("Server Error. Please try again later.");
    }
  };

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
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={{ ...styles.message, color: msgColor }}>{msg}</p>
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
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
  },
};

export default AdminLogin;
