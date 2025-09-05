import { useState } from 'react';
import axios from 'axios';
import config from '../../config';

export default function DeleteCustomer() {
  const [cid, setCid] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`${config.url}/api/customer/delete/${cid}`);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setCid('');
      }
    } catch (error) {
      if (error.response) {
        setMessage('');
        setError(error.response.data);
      } else {
        setMessage('');
        setError('An unexpected error occurred.');
      }
    }
  };

  // Internal CSS styles
  const containerStyle = {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9ff",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
  };

  const headingStyle = {
    textAlign: "center",
    color: "#b91c1c", // Red heading for delete action
    marginBottom: "20px",
    textDecoration: "underline"
  };

  const formGroup = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column"
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333"
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #bbb",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#dc2626", // Strong red for delete
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px"
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Delete Customer</h3>
      {
        message ? (
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
        ) : (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
        )
      }
      <form onSubmit={handleDelete}>
        <div style={formGroup}>
          <label style={labelStyle}>Customer ID</label>
          <input
            type="number"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Delete Customer</button>
      </form>
    </div>
  );
}
