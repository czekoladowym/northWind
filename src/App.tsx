import { Home } from "./pages/Home";
import { Link } from "react-router-dom";
import "./styles/Sidebar.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Dashboard.css";
import "./styles/Suppliers.css";
import "./styles/Search.css";
import "./styles/Order.css";
import "./styles/Pagination.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
