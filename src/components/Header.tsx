import { useState, useEffect } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let menuToggle = document.querySelectorAll(".sidebar");
  let contentToggle = document.querySelectorAll(".main-section");
  let headerToggle = document.querySelectorAll(".header");

  const sideBarToggle = (event: any) => {
    event.preventDefault();
    Array.from(menuToggle).map((menu: any) => {
      menu.classList.toggle("sidebar-active");
    });
    Array.from(contentToggle).map((content: any) => {
      content.classList.toggle("main-section-active");
    });
    Array.from(headerToggle).map((header: any) => {
      header.classList.toggle("main-section-active");
    });
  };

  return (
    <div className="header">
      <a
        href="#"
        className="menu-btn"
        onClick={(e) => {
          sideBarToggle(e);
        }}
      >
        <span className="material-icons dark-menu-icon">menu</span>
      </a>
      <div id="clock">{time}</div>

      <div
        className="sql-links"
        id="dropdownLinks"
        onClick={() => setOpen(!open)}
      >
        <span className="material-icons">menu</span>
        <p className="SQL-links-title">SQLite Links</p>
        <span className=" material-icons">keyboard_arrow_down</span>
      </div>
      {open && (
        <ul id="dropdown-content">
          <a
            href="https://blog.cloudflare.com/introducing-d1/"
            id="dropdownLinks"
            className="menu-link-drop"
          >
            <span className="material-icons">link</span>
            <p className="sql-item">Introducing D1</p>
          </a>
          <a
            href="https://www.sqlite.org/lang.html"
            id="dropdownLinks"
            className="menu-link-drop"
          >
            <span className="material-icons">link</span>
            <p className="sql-item">SQLite SQL Flavour</p>
          </a>
          <a
            href="https://developers.cloudflare.com/workers/learning/using-durable-objects/"
            id="dropdownLinks"
            className="menu-link-drop"
          >
            <span className="material-icons">link</span>
            <p className="sql-item"> Durable Objects</p>
          </a>
        </ul>
      )}
      <a className="header-dots">
        <span className="icon material-icons">more_vert</span>
      </a>
    </div>
  );
};
