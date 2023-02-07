import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Pagination } from "../components/Pagination";

type Customer = {
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  city: string;
  country: string;
  address: string;
};
type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Customer[];
  logs: Logs;
};

export const Customers = () => {
  const [content, setContent] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentPerPage] = useState<number>(20);
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/customers"
      );
      setContent(res.data.content);
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
                <td className="image-colomn">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      customer.contactName
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <a className="link-company" href="#">
                    {customer.companyName}
                  </a>
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
          contentPerPage={contentPerPage}
          totalContent={content.length}
          paginate={paginate}
        />
      </main>
    </div>
  );
};
