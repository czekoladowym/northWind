import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Logs } from "../customers/Customers";

type ProductsOrder = {
  product: string;
  quantity: number;
  orderPrice: string;
  totalPrice: string;
  discount: string;
};

type Order = {
  customerID: string;
  shipName: string;
  totalProducts: number;
  totalQuantity: number;
  totalPrice: string;
  totalDiscount: string;
  shipVia: string;
  freight: string;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipCity: string;
  region: null | string;
  shipPostalCode: string;
  shipCountry: string;
  productsInOrder: ProductsOrder[];
};
type iDRes = {
  content: Order[];
  logs: Logs;
};

const OrderInfo = () => {
  const [order, setOrder] = useState<Order | undefined>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<iDRes> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/orders/${id}`
      );
      const [resContent] = res.data.content;
      setOrder(resContent);
      dispatch(addLogAction(res.data.logs));
      dispatch(addResultAction(res.data.content.length));
      setLoading(false);
    };
    getContent();
  }, []);

  if (loading) {
    return (
      <div>
        <Sidebar />
        <Header />
        <main className="main-section">
          <h1 className="loading">Loading order...</h1>
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
          <h1 className="page-title">
            <span className="material-icons id-icons">ballot</span>
            Order information
          </h1>
        </div>
        <div className="id-main-card">
          <div className="id-card-content">
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Customer Id</h1>
                <Link
                  className="id-desc blue-id"
                  to={`/customers/${order?.customerID}`}
                >
                  {order?.customerID}
                </Link>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship Name</h1>
                <p className="id-desc">{order?.shipName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Total Ptoducts</h1>
                <p className="id-desc">{order?.totalProducts}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Total Quantity</h1>
                <p className="id-desc">{order?.totalQuantity}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Total Price</h1>
                <p className="id-desc">{order?.totalPrice}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Total Discount</h1>
                <p className="id-desc">{order?.totalDiscount}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship Via</h1>
                <p className="id-desc">{order?.shipVia}</p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Freight</h1>
                <p className="id-desc">{"$" + order?.freight}</p>
              </div>
            </div>
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Order Date</h1>
                <p className="id-desc">{order?.orderDate}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Required Date</h1>
                <p className="id-desc">{order?.requiredDate}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Shipped Date</h1>
                <p className="id-desc">{order?.shippedDate}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship City</h1>
                <a className="id-desc">{order?.shipCity}</a>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship Region</h1>
                <a className="id-desc">-</a>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship Postal Code</h1>
                <a className="id-desc">{order?.shipPostalCode}</a>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Ship Country</h1>
                <a className="id-desc">{order?.shipCountry}</a>
              </div>
            </div>
          </div>
          <hr className="card-content-hr" />
          <button className="back-btn" onClick={() => history.back()}>
            Go back
          </button>
        </div>
        <div className="card-table">
          <table>
            <header>
              <h1 className="page-title card-title">Products in Order</h1>
            </header>
          </table>
        </div>
      </main>
    </div>
  );
};
export default OrderInfo;
