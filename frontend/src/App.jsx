import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomerNavBar from "./components/customer/CustomerNavBar";

function App() {
  return (
    <BrowserRouter>
      <CustomerNavBar />
    </BrowserRouter>
  );
}

export default App;
