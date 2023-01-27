import { useState } from "react";
import { currentTime } from "../actions/live-clock";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div id="clock">14:15:10</div>

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
          >
            <span className="material-icons">link</span>
            <p className="sql-item">Introducing D1</p>
          </a>
          <a href="https://www.sqlite.org/lang.html" id="dropdownLinks">
            <span className="material-icons">link</span>
            <p className="sql-item">SQLite SQL Flavour</p>
          </a>
          <a
            href="https://developers.cloudflare.com/workers/learning/using-durable-objects/"
            id="dropdownLinks"
          >
            <span className="material-icons">link</span>
            <p className="sql-item"> Durable Objects</p>
          </a>
        </ul>
      )}
    </div>
  );
};
