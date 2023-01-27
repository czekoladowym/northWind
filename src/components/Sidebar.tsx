export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="company-name">
        <span className="font-black">Northwind</span> Traders
      </div>
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a href="/">
            <span className="material-icons md-light">home</span>
            <p className="menu-item">Home</p>
          </a>
          <a href="/dash">
            <span className="material-icons md-light">display_settings</span>
            <p className="menu-item">Dashboard</p>
          </a>
        </li>
      </ul>
      <p className="menu-label">Backoffice</p>
      <ul className="menu-list">
        <li>
          <a href="/suppliers">
            <span className="material-icons md-light">inventory</span>
            <p className="menu-item">Suppliers</p>
          </a>
          <a href="/products">
            <span className="material-icons md-light">
              production_quantity_limits
            </span>
            <p className="menu-item">Products</p>
          </a>
          <a href="/orders">
            <span className="material-icons md-light">shopping_cart</span>
            <p className="menu-item">Orders</p>
          </a>
          <a href="/employees">
            <span className="material-icons md-light">badge</span>
            <p className="menu-item">Employees</p>
          </a>
          <a href="/customers">
            <span className="material-icons md-light">group</span>
            <p className="menu-item">Customers</p>
          </a>
          <a href="/search">
            <span className="material-icons md-light">search</span>
            <p className="menu-item">Search</p>
          </a>
        </li>
      </ul>
    </aside>
  );
};
