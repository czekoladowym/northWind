import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import axios, { Axios, AxiosResponse } from "axios";
import Pagination from "../../components/pagination/pagination";
import { useDispatch } from "react-redux/es/exports";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Link } from "react-router-dom";

type Product = {
  id: string;
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
  pages: number;
  content: Product[];
  logs: Logs[];
};

const Products = () => {
  const [content, setContent] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<Response> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/products`,
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

  const paginate = (pageNum: number) => setCurrentPage(pageNum);

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
            {content.map((product) => (
              <tr key={product.id}>
                <td className="row-item">
                  <Link to={`/products/${product.id}`} className="blue-id">
                    {product.name}
                  </Link>
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
          activePage={currentPage}
          pagesNumber={pageCount}
          onChangePage={paginate}
        />
      </main>
    </div>
  );
};
export default Products;
