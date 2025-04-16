import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Analytics from "./Analytics";
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
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/getAllQueries", {
      credentials: "include",
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

  const handleStatusChange = (id, newStatus) => {
    fetch("http://localhost:8080/api/updateStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Portal</h1>
      </div>

      {/* Centered Capsule Toggle */}
      <div className="toggle-container">
        <div className="capsule-toggle">
          <button
            className={`toggle-btn ${!showAnalytics ? "active" : ""}`}
            onClick={() => setShowAnalytics(false)}
          >
            Dashboard
          </button>
          <button
            className={`toggle-btn ${showAnalytics ? "active" : ""}`}
            onClick={() => setShowAnalytics(true)}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Display Analytics or Dashboard based on state */}
      {loading ? (
        <p>Loading...</p>
      ) : showAnalytics ? (
        <Analytics queries={queries} />
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
              <th>Additional Services</th>
              <th>Cost</th>
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
                <td>
                  <ul>
                    {query.cameraRequired && <li>Camera</li>}
                    {query.vehicleRequired && <li>Vehicle</li>}
                    {query.firstAid && <li>First Aid</li>}
                    {query.walkieTalkie && <li>Walkie Talkie</li>}
                    {query.bulletProof && <li>Bullet Proof</li>}
                    {query.fireSafety && <li>Fire Safety</li>}
                  </ul>
                </td>
                <td>₹{query.cost?.toFixed(2) || "0.00"}</td>
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
                    onChange={(e) => handleStatusChange(query.id, e.target.value)}
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
