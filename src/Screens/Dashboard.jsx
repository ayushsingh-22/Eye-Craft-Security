import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch queries on component mount
  useEffect(() => {
    fetch("http://localhost:8080/api/queries")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setQueries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>

      {loading ? (
        <p>Loading queries...</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
          >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query) => (
                <tr key={query.id}>
                  <td>{query.id}</td>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td>{query.phone}</td>
                  <td>{query.message}</td>
                  <td>{new Date(query.submitted_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
