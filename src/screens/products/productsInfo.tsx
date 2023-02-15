import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Logs } from "../customers/Customers";

interface Product {
  productID: string;
  productName: string;
  supplierID: string;
  categoryID: string;
  quantityPerUnit: string;
  unitPrice: string;
  unitsInStock: string;
  unitsOnOrder: string;
  reorderLevel: string;
  discontinued: string;
  supplier: string;
}
interface iDRes {
  content: Product[];
  logs: Logs[];
}

const ProductsInfo = () => {
  const [product, setProduct] = useState<Product | undefined>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<iDRes> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/products/${id}`
      );
      const [resContent] = res.data.content;
      setLoading(false);
      setProduct(resContent);
      dispatch(addLogAction(res.data.logs));
      dispatch(addResultAction(res.data.content.length));
    };
    getContent();
  }, []);

  if (loading) {
    return (
      <div>
        <Sidebar />
        <Header />
        <main className="main-section">
          <h1 className="loading">Loading product...</h1>
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
            Product information
          </h1>
        </div>
        <div className="id-main-card">
          <div className="id-card-content">
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Product Name</h1>
                <p className="id-desc">{product?.productName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Supplier</h1>
                <p className="id-desc">
                  <Link
                    className="blue-id"
                    to={`/suppliers/${product?.supplierID}`}
                  >
                    {product?.supplier}
                  </Link>
                </p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Quantity Per Unit</h1>
                <p className="id-desc">{product?.quantityPerUnit}</p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Unit Price</h1>
                <p className="id-desc">{"$" + product?.unitPrice}</p>
              </div>
            </div>
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Units In Stock</h1>
                <p className="id-desc">{product?.unitsInStock}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Units In Order</h1>
                <p className="id-desc">{product?.unitsOnOrder}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Reorder Level</h1>
                <p className="id-desc">
                  {product?.reorderLevel ? product?.reorderLevel : "-"}
                </p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Discontinued</h1>
                {product?.discontinued ? product?.discontinued : "-"}
              </div>
            </div>
          </div>
          <hr className="card-content-hr" />
          <button className="back-btn" onClick={() => history.back()}>
            Go back
          </button>
        </div>
      </main>
    </div>
  );
};
export default ProductsInfo;
