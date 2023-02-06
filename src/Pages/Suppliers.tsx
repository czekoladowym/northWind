import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Buffer } from "buffer";

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
  useEffect(() => {
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/suppliers"
      );
      setContent(res.data.content);
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
            {content.map((supplier, i) => (
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
      </main>
    </div>
  );
};
