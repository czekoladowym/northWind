import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Pagination from "../../components/pagination/pagination";
import { useDispatch } from "react-redux/es/exports";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Link } from "react-router-dom";

type Employee = {
  id: string;
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
  pages: number;
  content: Employee[];
  logs: Logs[];
};

const Employees = () => {
  const [content, setContent] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/employees",
        {
          params: {
            page: currentPage,
          },
        }
      );
      setLoading(false);
      setContent(res.data.content);
      setPageCount(res.data.pages);
      dispatch(addLogAction(res.data.logs));
      dispatch(addResultAction(res.data.content.length));
    };
    getContent();
  }, []);

  function abbreviateName(name: string) {
    return name
      .split(" ")
      .map((part) => part[0].toUpperCase())
      .join("-");
  }

  const paginate = (pageNum: number) => setCurrentPage(pageNum);
  if (loading) {
    return (
      <div>
        <Sidebar />
        <Header />
        <main className="main-section">
          <h1 className="loading">Loading orders...</h1>
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
          <h1 className="page-title">Employees</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="employees-table pc-table">
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
              // ENTER ID
              <tr key={employee.id}>
                <td className="image-column">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      employee.name
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <Link
                    className="link-employees"
                    to={`/employees/${employee.id}`}
                  >
                    {employee.name}
                  </Link>
                </td>
                <td className="row-item">{employee.title}</td>
                <td className="row-item">{employee.city}</td>
                <td className="row-item">{employee.phone}</td>
                <td className="row-item">{employee.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="adaptive-table">
          {content.map((employee) => (
            <tbody key={employee.id}>
              <tr className="image-column-adaptive">
                <td>
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      employee.name
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
              </tr>
              <tr className="adaptive-row">
                <td className="adaptive-bold-td">Name</td>
                <td className="adaptive-td">
                  <Link to={`${employee.id}`} className="blue-id">
                    {employee.name}
                  </Link>
                </td>
              </tr>
              <tr className="adaptive-row">
                <td className="adaptive-bold-td">Title</td>
                <td className="adaptive-td">{employee.title}</td>
              </tr>
              <tr className="adaptive-row">
                <td className="adaptive-bold-td">City</td>
                <td className="adaptive-td">{employee.city}</td>
              </tr>
              <tr className="adaptive-row">
                <td className="adaptive-bold-td">Phone</td>
                <td className="adaptive-td">{employee.phone}</td>
              </tr>
              <tr className="adaptive-row">
                <td className="adaptive-bold-td">Country</td>
                <td className="adaptive-td">{employee.country}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Pagination
          activePage={currentPage}
          pagesNumber={pageCount}
          onChangePage={paginate}
        />
      </main>
    </div>
  );
};
export default Employees;
