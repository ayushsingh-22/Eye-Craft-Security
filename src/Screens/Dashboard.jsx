import React, { useEffect, useState } from "react";
import "./Styles/Dashboard.css";

const getStatusColor = (status) => {
  switch (status) {
    case "Resolved":
      return "#4CAF50"; // green
    case "In Progress":
      return "#FF9800"; // orange
    case "Rejected":
      return "#F44336"; // red
    case "Pending":
    default:
      return "#9E9E9E"; // grey
  }
};

const Dashboard = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/getAllQueries")
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
      <h1>Admin Dashboard</h1>
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
