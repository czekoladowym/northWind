import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Suppliers = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="section-header">
          <h1 className="page-title">Suppliers</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table>
          <tr>
            <th className="avatar-icons-column"></th>
            <th className="company-column">Company</th>
            <th className="contact-column">Contact</th>
            <th className="title-column">Title</th>
            <th className="city-column">City</th>
            <th className="country-column">Country</th>
            <th className="empty-column"></th>
          </tr>
        </table>
        {/* <table className="table-header">
          <p className="avatar-icons-column"></p>
          <p className="company-column"></p>
          <p className="contact-column"></p>
          <p className="title-column"></p>
          <p className="city-column"></p>
          <p className="country-column"></p>
        </table> */}
      </main>
    </div>
  );
};
