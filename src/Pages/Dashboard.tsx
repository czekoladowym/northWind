import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Dashboard = () => {
  return (
    <body>
      <Sidebar />
      <Header />
      <main className="main-home-section">
        <div className="card-content">
          <div className="main-table">
            <div className="table-section">
              <h1 className="section-title">Worker</h1>
              <p className="section-text">Colo: DUS</p>
              <p className="section-text">Country: DE</p>
            </div>
            <div className="table-section">
              <h1 className="section-title">SQL Metrics</h1>
              <p className="section-text">Query count: 24</p>
              <p className="section-text">Results count: 230</p>
              <p className="section-text"># SELECT: 24</p>
              <p className="section-text"># SELECT WHERE: 0</p>
              <p className="section-text"># SELECT LEFT JOIN: 0</p>
            </div>
          </div>
          <div className="activity-section">
            <h1 className="section-title activity">Activity log</h1>
            <p className="activity-desc">
              Explore the app and see metrics here
            </p>
            <div className="log-section">
              <p className="log-time">
                2023-01-30T10:14:37.248Z,
                primary-cf5c58b0-e2c3-46e2-b128-37eecde77a08.db3,
                1.3082480020821095ms
              </p>
              <p className="select-count">
                SELECT COUNT(1) as total FROM Supplier
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
