import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import "./Styles/Dashboard.css";

const getStatusColor = (status) => {
  switch (status) {
    case "Resolved":
      return "#4CAF50";
    case "In Progress":
      return "#FF9800";
    case "Rejected":
      return "#F44336";
    case "Pending":
    default:
      return "#9E9E9E";
  }
};

const Dashboard = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈 initialize router navigation

  // Fetch all queries
  useEffect(() => {
    fetch("http://localhost:8080/api/getAllQueries", {
      credentials: "include", // 👈 Include cookie/session
    })
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // Handle status change
  const handleStatusChange = (id, newStatus) => {
    fetch("http://localhost:8080/api/updateStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 👈 Include cookie/session
      body: JSON.stringify({ id, status: newStatus }),
    })
      .then((res) => res.json())
      .then(() => {
        setQueries((prev) =>
          prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
        );
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  // 👇 Logout handler
  const handleLogout = () => {
    fetch("http://localhost:8080/api/logout", {
      method: "POST",
      credentials: "include", // 👈 Important for clearing cookie
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/"); // 👈 Redirect to login after logout
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Message</th>
              <th>Submitted At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query.id}>
                <td>{query.id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.phone}</td>
                <td>{query.service}</td>
                <td>{query.message}</td>
                <td>{new Date(query.submitted_at).toLocaleString()}</td>
                <td>
                  <select
                    value={query.status || "Pending"}
                    style={{
                      backgroundColor: getStatusColor(query.status),
                      color: "white",
                      border: "none",
                      padding: "5px",
                      borderRadius: "4px",
                    }}
                    onChange={(e) =>
                      handleStatusChange(query.id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
