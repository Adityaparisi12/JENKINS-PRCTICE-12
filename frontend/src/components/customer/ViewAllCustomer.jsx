import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

export default function ViewAllCustomer() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${config.url}/api/customer/viewall`);
      setCustomers(response.data);
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError('Failed to fetch customers.');
      }
    }
  };

  // Internal CSS
  const containerStyle = {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
  };

  const headingStyle = {
    textAlign: "center",
    color: "#16a34a", // Green for view action
    marginBottom: "20px",
    textDecoration: "underline"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "14px"
  };

  const thStyle = {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center"
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>All Customers</h3>

      {error && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}

      {customers.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Gender</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, index) => (
              <tr
                key={c.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f3f4f6",
                  transition: "background-color 0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d1fae5")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f3f4f6")}
              >
                <td style={tdStyle}>{c.id}</td>
                <td style={tdStyle}>{c.name}</td>
                <td style={tdStyle}>{c.gender}</td>
                <td style={tdStyle}>{c.age}</td>
                <td style={tdStyle}>{c.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p style={{ textAlign: "center" }}>No customers found.</p>
      )}
    </div>
  );
}
