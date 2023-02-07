import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Pagination } from "../components/Pagination";

type Supplier = {
  id: string;
  company: string;
  contact: string;
  title: string;
  city: string;
  country: string;
};
type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Supplier[];
  logs: Logs;
};

export const Suppliers = () => {
  const [content, setContent] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentPerPage] = useState<number>(20);
  useEffect(() => {
    const getContent = async () => {
      setLoading(true);
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/suppliers"
      );
      setContent(res.data.content);
      setLoading(false);
    };

    getContent();
  }, []);
  function abbreviateName(name: string) {
    const nameSplitted = name.trimEnd().split(" ");
    const nameRes = nameSplitted[0].concat(
      "-",
      nameSplitted[nameSplitted.length - 1]
    );
    return nameRes;
  }

  // change page
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
          <h1 className="loading">Loading suppliers...</h1>
        </main>
      </div>
    );
  }
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
        <table className="suppliers-table">
          <thead className="suppliers">
            <th className="avatar-icons-column"></th>
            <th>Company</th>
            <th>Contact</th>
            <th>Title</th>
            <th>City</th>
            <th>Country</th>
            <th></th>
          </thead>
          <tbody>
            {currentContent.map((supplier, i) => (
              <tr>
                <td className="image-colomn">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      supplier.contact
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <a className="link-company" href="#">
                    {supplier.company}
                  </a>
                </td>
                <td className="row-item">{supplier.contact}</td>
                <td className="row-item">{supplier.title}</td>
                <td className="row-item">{supplier.city}</td>
                <td className="row-item">{supplier.country}</td>
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
