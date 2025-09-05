import { useState } from 'react';
import axios from 'axios';
import config from '../../config';

export default function UpdateCustomer() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    age: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${config.url}/api/customer/update`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
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

  // Internal CSS
  const containerStyle = {
    maxWidth: "450px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f0f7ff",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
  };

  const headingStyle = {
    textAlign: "center",
    color: "#2563eb", // Blue for update action
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

  const selectStyle = {
    ...inputStyle,
    backgroundColor: "white"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb", // Blue
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
      <h3 style={headingStyle}>Update Customer</h3>
      {
        message ? (
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
        ) : (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
        )
      }
      <form onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label style={labelStyle}>Customer ID (to update)</label>
          <input
            type="number"
            id="id"
            value={formData.id}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroup}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroup}>
          <label style={labelStyle}>Gender</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            style={selectStyle}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={formGroup}>
          <label style={labelStyle}>Age</label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroup}>
          <label style={labelStyle}>Contact</label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Update Customer</button>
      </form>
    </div>
  );
}
