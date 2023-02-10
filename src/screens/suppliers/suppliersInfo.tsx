import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Logs } from "../customers/Customers";

type Supplier = {
  supplierID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: null | string;
  postalCode: string;
  country: string;
  phone: string;
  fax: null | string;
  homePage: null | string;
};
type iDRes = {
  content: Supplier[];
  logs: Logs;
};

const SuppliersInfo = () => {
  const [supplier, setSupplier] = useState<Supplier | undefined>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<iDRes> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/suppliers/${id}`
      );
      const [resContent] = res.data.content;
      setSupplier(resContent);
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
          <h1 className="loading">Loading supplier...</h1>
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
            Supplier information
          </h1>
        </div>
        <div className="id-main-card">
          <div className="id-card-content">
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Company Name</h1>
                <p className="id-desc">{supplier?.companyName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Contact Name</h1>
                <p className="id-desc">{supplier?.contactName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Contact Title</h1>
                <p className="id-desc">{supplier?.contactTitle}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Address</h1>
                <p className="id-desc">{supplier?.address}</p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">City</h1>
                <p className="id-desc">{supplier?.city}</p>
              </div>
            </div>
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Region</h1>
                <p className="id-desc">
                  {supplier?.region ? supplier?.region : "-"}
                </p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Postal Code</h1>
                <p className="id-desc">{supplier?.postalCode}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Country</h1>
                <p className="id-desc">{supplier?.country}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Phone</h1>
                <a className="id-desc">{supplier?.phone}</a>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Home Page</h1>
                <a className="id-desc">{supplier?.homePage}</a>
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
export default SuppliersInfo;
