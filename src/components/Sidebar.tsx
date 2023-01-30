import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="company-name">
        <span className="font-black">Northwind</span> Traders
      </div>
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink className="menu-link" to="/">
            <span className="material-icons md-light">home</span>
            <p className="menu-item">Home</p>
          </NavLink>
          <NavLink className="menu-link" to="/dash">
            <span className="material-icons md-light">display_settings</span>
            <p className="menu-item">Dashboard</p>
          </NavLink>
        </li>
      </ul>
      <p className="menu-label">Backoffice</p>
      <ul className="menu-list">
        <li>
          <NavLink className="menu-link" to="/suppliers">
            <span className="material-icons md-light">inventory</span>
            <p className="menu-item">Suppliers</p>
          </NavLink>
          <NavLink className="menu-link" to="/products">
            <span className="material-icons md-light">
              production_quantity_limits
            </span>
            <p className="menu-item">Products</p>
          </NavLink>
          <NavLink className="menu-link" to="/orders">
            <span className="material-icons md-light">shopping_cart</span>
            <p className="menu-item">Orders</p>
          </NavLink>
          <NavLink className="menu-link" to="/employees">
            <span className="material-icons md-light">badge</span>
            <p className="menu-item">Employees</p>
          </NavLink>
          <a className="menu-link" href="/customers">
            <span className="material-icons md-light">group</span>
            <p className="menu-item">Customers</p>
          </a>
          <NavLink className="menu-link" to="/search">
            <span className="material-icons md-light">search</span>
            <p className="menu-item">Search</p>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
