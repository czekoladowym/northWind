import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Pagination from "../../components/pagination/pagination";
import { useDispatch } from "react-redux/es/exports";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Link } from "react-router-dom";

export type Customer = {
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  city: string;
  postalCode: string;
  region: null;
  country: string;
  address: string;
  phone: string;
  fax: string;
};
export type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Customer[];
  logs: Logs;
};

const Customers = () => {
  const [content, setContent] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentPerPage] = useState<number>(20);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/customers"
      );
      setContent(res.data.content);
      dispatch(addLogAction(res.data.logs));
      dispatch(addResultAction(res.data.content.length));
      setLoading(false);
    };
    getContent();
  }, []);

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

  // get current content
  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContent = content.slice(indexOfFirstContent, indexOfLastContent);

  if (loading) {
    return (
      <div>
        <Sidebar />
        <Header />
        <main className="main-section">
          <h1 className="loading">Loading customers...</h1>
        </main>
      </div>
    );
  }

  function abbreviateName(name: string) {
    const nameSplitted = name.trimEnd().split(" ");
    const nameRes = nameSplitted[0].concat(
      "-",
      nameSplitted[nameSplitted.length - 1]
    );
    return nameRes;
  }
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
            {currentContent.map((customer, i) => (
              <tr key={customer.customerID}>
                <td className="image-column">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      customer.contactName
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <Link
                    className="link-company"
                    to={`/customers/${customer.customerID}`}
                  >
                    {customer.companyName}
                  </Link>
                </td>
                <td className="row-item">{customer.contactName}</td>
                <td className="row-item">{customer.contactTitle}</td>
                <td className="row-item">{customer.city}</td>
                <td className="row-item">{customer.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          activePage={currentPage}
          pagesNumber={content.length / contentPerPage}
          onChangePage={paginate}
        />
      </main>
    </div>
  );
};
export default Customers;