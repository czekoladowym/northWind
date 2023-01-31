import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Search = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="search-content">
          <h1 className="search-title">Search Database</h1>
          <div className="seacrh-input-card">
            <span className="material-icons search">search</span>
            <input
              type="text"
              placeholder="Enter keyword..."
              className="input-search"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
