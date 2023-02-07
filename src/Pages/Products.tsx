import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios, { Axios, AxiosResponse } from "axios";
import { Pagination } from "../components/Pagination";

type Product = {
  name: string;
  qtPerUnit: string;
  price: string;
  stock: string;
  orders: string;
};
type Logs = {
  sql: string;
  date: string;
  requestTime: string;
};

type Response = {
  content: Product[];
  logs: Logs;
};

export const Products = () => {
  const [content, setContent] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentPerPage] = useState<number>(20);
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        "https://nortwind-backend-rodkin.onrender.com/products"
      );
      setContent(res.data.content);
      setLoading(false);
    };

    getContent();
  }, []);
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
          <h1 className="loading">Loading products...</h1>
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
          <h1 className="page-title">Products</h1>
          <a className="section-header-icon">
            <span className="material-icons dark-icon">redo</span>
          </a>
        </div>
        <table className="products-table">
          <thead className="products">
            <th>Name</th>
            <th>Qt per unit</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Orders</th>
            <th></th>
          </thead>
          <tbody>
            {currentContent.map((product, id) => (
              <tr>
                <td className="row-item">
                  <a href="#" className="blue-id">
                    {product.name}
                  </a>
                </td>
                <td className="row-item">{product.qtPerUnit}</td>
                <td className="row-item">{"$" + product.price}</td>
                <td className="row-item">{product.stock}</td>
                <td className="row-item">{product.orders}</td>
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
