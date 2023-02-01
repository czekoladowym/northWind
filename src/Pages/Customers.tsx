import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Customers = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="section-header">
          <h1 className="page-title">Customers</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="customers-table">
          <thead className="customers">
            <th className="avatar-icons-column"></th>
            <th>Company</th>
            <th>Contact</th>
            <th>Title</th>
            <th>City</th>
            <th>Country</th>
            <th></th>
          </thead>
          <tbody>
            <tr className="gray-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Charlotte-Cooper.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/1">
                  Exotic Liquids
                </a>
              </td>
              <td className="row-item">Charlotte Cooper</td>
              <td className="row-item">Purchasing Manager</td>
              <td className="row-item">London</td>
              <td className="row-item">UK</td>
            </tr>
            <tr className="white-row">
              <td className="image-colomn">
                <img
                  src="https://avatars.dicebear.com/v2/initials/Shelley-Burke.svg"
                  className="rounded-full"
                />
              </td>
              <td className="row-item">
                <a className="link-company" href="/supplier/2">
                  New Orleans Cajun Delights
                </a>
              </td>
              <td className="row-item">Shelley Burke</td>
              <td className="row-item">Order Administrator</td>
              <td className="row-item">New Orleans</td>
              <td className="row-item">USA</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
