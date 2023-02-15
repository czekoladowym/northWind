import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { logsSelector, resultsSelector } from "../store/selectors/logSelectors";
import { Log } from "../store/redusers/logsReducer";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { addLogAction, addResultAction } from "../store/actions/logActions";

interface getUserInfo {
  ipAddress: string;
  continentCode: string;
  continentName: string;
  countryCode: string;
  countryName: string;
  stateProv: string;
  city: string;
}

const Dashboard = () => {
  const logs = useSelector(logsSelector);
  const res = useSelector(resultsSelector);
  const [apiRes, setApiRes] = useState<getUserInfo>();

  const dispatch = useDispatch();
  useEffect(() => {
    const getContent = async () => {
      const res: AxiosResponse<getUserInfo> = await axios.get(
        "https://api.db-ip.com/v2/free/self"
      );
      setApiRes(res.data);
    };

    getContent();
  }, []);
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-home-section">
        <div className="card-content">
          <div className="main-table">
            <div className="table-section">
              <h1 className="section-title">Worker</h1>
              <p className="section-text">Colo: {apiRes?.continentCode}</p>
              <p className="section-text">Country: {apiRes?.countryCode}</p>
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
                <div key={i}>
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
    </div>
  );
};
export default Dashboard;
