import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

type Employee = {
  name: string;
  title: string;
  city: string;
  phone: string;
  country: string;
};
type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Employee[];
  logs: Logs;
};

export const Employees = () => {
  const [content, setContent] = useState<Employee[]>([]);
  useEffect(() => {
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/employees"
      );
      setContent(res.data.content);
    };

    getContent();
  }, []);
  function abbreviateName(name: string) {
    return name
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("-");
  }
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="section-header">
          <h1 className="page-title">Employees</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="employees-table">
          <thead className="employees">
            <th className="avatar-icons-column"></th>
            <th>Name</th>
            <th>Title</th>
            <th>City</th>
            <th>Phone</th>
            <th>Country</th>
            <th></th>
          </thead>
          <tbody>
            {content.map((employee, i) => (
              <tr>
                <td className="image-colomn">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      employee.name
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <a className="link-employees" href="#">
                    {employee.name}
                  </a>
                </td>
                <td className="row-item">{employee.title}</td>
                <td className="row-item">{employee.city}</td>
                <td className="row-item">{employee.phone}</td>
                <td className="row-item">{employee.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
