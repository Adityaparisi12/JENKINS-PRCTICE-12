import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import ViewAllCustomer from "./ViewAllCustomer";
import UpdateCustomer from "./UpdateCustomer";
import DeleteCustomer from "./DeleteCustomer";

export default function CustomerNavBar() {
  // Internal CSS styles
  const navStyle = {
    backgroundColor: "#282c34",
    padding: "15px",
  };

  const ulStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const linkHover = {
    color: "#61dafb",
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/add-customer" style={linkStyle}>
              Add Customer
            </Link>
          </li>
          <li>
            <Link to="/view-customers" style={linkStyle}>
              View Customers
            </Link>
          </li>
          <li>
            <Link to="/update-customer" style={linkStyle}>
              Update Customer
            </Link>
          </li>
          <li>
            <Link to="/delete-customer" style={linkStyle}>
              Delete Customer
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/view-customers" element={<ViewAllCustomer />} />
        <Route path="/update-customer" element={<UpdateCustomer />} />
        <Route path="/delete-customer" element={<DeleteCustomer />} />
      </Routes>
    </div>
  );
}
