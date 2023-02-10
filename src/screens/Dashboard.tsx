import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import { logsSelector, resultsSelector } from "../store/selectors/logSelectors";
import { Log } from "../store/redusers/logsReducer";

export const Dashboard = () => {
  const logs = useSelector(logsSelector);
  const res = useSelector(resultsSelector);
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
              <p className="section-text">Query count: {logs.queryCount}</p>
              <p className="section-text">Results count: {res}</p>
              <p className="section-text">
                # SELECT: {logs.metricsCount.select}
              </p>
              <p className="section-text">
                # SELECT WHERE: {logs.metricsCount.where}
              </p>
              <p className="section-text">
                # SELECT LEFT JOIN: {logs.metricsCount.leftJoin}
              </p>
            </div>
          </div>
          <div className="activity-section">
            <h1 className="section-title activity">Activity log</h1>
            <p className="activity-desc">
              Explore the app and see metrics here
            </p>
            <div className="log-section">
              {logs.logs.map((log: Log, i) => (
                <div>
                  <p className="log-time">
                    {log.date}, {log.requestTime}
                  </p>
                  <p className="select-count">{log.sql}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
