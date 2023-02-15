import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Pagination from "../../components/pagination/pagination";
import { useDispatch } from "react-redux/es/exports";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Link } from "react-router-dom";

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
  pages: number;
  content: Supplier[];
  logs: Logs[];
};

const Suppliers = () => {
  const [content, setContent] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const getContent = async () => {
      setLoading(true);
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/suppliers",
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
  }, [currentPage]);
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
          <header className="suppliers">
            <th className="avatar-icons-column"></th>
            <th>Company</th>
            <th>Contact</th>
            <th>Title</th>
            <th>City</th>
            <th>Country</th>
            <th></th>
          </header>
          <tbody>
            {content.map((supplier, i) => (
              <tr key={supplier.id}>
                <td className="image-column">
                  <img
                    src={`https://avatars.dicebear.com/v2/initials/${abbreviateName(
                      supplier.contact
                    )}.svg`}
                    className="rounded-full"
                  />
                </td>
                <td className="row-item">
                  <Link className="link-company" to={`${supplier.id}`}>
                    {supplier.company}
                  </Link>
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
          activePage={currentPage}
          pagesNumber={pageCount}
          onChangePage={paginate}
        />
      </main>
    </div>
  );
};
export default Suppliers;
