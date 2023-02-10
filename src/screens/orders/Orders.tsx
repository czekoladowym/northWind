import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Pagination from "../../components/pagination/pagination";
import { useDispatch } from "react-redux/es/exports";
import { addLogAction } from "../../store/actions/logActions";
import { Link } from "react-router-dom";

type Order = {
  id: string;
  price: string;
  products: string;
  quantity: string;
  shipped: string;
  shipName: string;
  city: string;
  country: string;
};
type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Order[];
  logs: Logs;
};

const Orders = () => {
  const [content, setContent] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentPerPage] = useState<number>(20);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/orders"
      );
      setContent(res.data.content);
      dispatch(addLogAction(res.data.logs));
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
          <h1 className="page-title">Orders</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="orders-table">
          <thead className="orders">
            <th>Id</th>
            <th>Total Price</th>
            <th>Products</th>
            <th>Quantity</th>
            <th>Shipped</th>
            <th>Ship Name</th>
            <th>City</th>
            <th>Country</th>
            <th></th>
          </thead>
          <tbody>
            {currentContent.map((order, i) => (
              <tr key={order.id}>
                <td className="row-item">
                  <Link to={`${order.id}`} className="blue-id">
                    {order.id}
                  </Link>
                </td>
                <td className="row-item">{"$" + order.price}</td>
                <td className="row-item">{order.products}</td>
                <td className="row-item">{order.quantity}</td>
                <td className="row-item">{order.shipped}</td>
                <td className="row-item">{order.shipName}</td>
                <td className="row-item">{order.city}</td>
                <td className="row-item">{order.country}</td>
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
export default Orders;
