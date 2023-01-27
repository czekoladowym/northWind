import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Suppliers } from "./Pages/Suppliers";
import { Products } from "./Pages/Products";
import { Orders } from "./Pages/Orders";
import { Employees } from "./Pages/Employees";
import { Customers } from "./Pages/Customers";
import { Search } from "./Pages/Search";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
