import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Logs } from "./Customers";
import { Customer } from "./Customers";

type iDRes = {
  content: Customer[];
  logs: Logs[];
};

const CustomerInfo = () => {
  const [content, setContent] = useState<Customer | undefined>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<iDRes> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/customers/${id}`
      );
      const [resContent] = res.data.content;
      setLoading(false);
      setContent(resContent);
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
          <h1 className="loading">Loading customer...</h1>
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
            Customer information
          </h1>
        </div>
        <div className="id-main-card">
          <div className="id-card-content">
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Company Name</h1>
                <p className="id-desc">{content?.companyName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Contact Name</h1>
                <p className="id-desc">{content?.contactName}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Contact Title</h1>
                <p className="id-desc">{content?.contactTitle}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Address</h1>
                <p className="id-desc">{content?.address}</p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">City</h1>
                <p className="id-desc">{content?.city}</p>
              </div>
            </div>
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Postal Code</h1>
                <p className="id-desc">{content?.postalCode}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Region</h1>
                <p className="id-desc">
                  {content?.region ? content?.region : "-"}
                </p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Country</h1>
                <p className="id-desc">{content?.country}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Phone</h1>
                <p className="id-desc">
                  {content?.phone ? content?.phone : "-"}
                </p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Fax</h1>
                <p className="id-desc "> {content?.fax ? content?.fax : "-"}</p>
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
export default CustomerInfo;
