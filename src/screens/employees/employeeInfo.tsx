import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addLogAction, addResultAction } from "../../store/actions/logActions";
import { Logs } from "../customers/Customers";

type Employee = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  homePhone: string;
  extension: string;
  phone: string;
  notes: string;
  reportsTo: string;
  reportsToName: string;
};
type iDRes = {
  content: Employee[];
  logs: Logs[];
};

const EmployeeInfo = () => {
  const [employees, setEmployees] = useState<Employee | undefined>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getContent = async () => {
      const res: AxiosResponse<iDRes> = await axios.get(
        `https://nortwind-backend-rodkin.onrender.com/employees/${id}`
      );
      const [resContent] = res.data.content;
      setLoading(false);
      setEmployees(resContent);
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
          <h1 className="loading">Loading employee...</h1>
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
            Employee information
          </h1>
        </div>
        <div className="id-main-card">
          <div className="id-card-content">
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Name</h1>
                <p className="id-desc">{employees?.name}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Title</h1>
                <p className="id-desc">{employees?.title}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Title Of Courtesy</h1>
                <p className="id-desc">{employees?.titleOfCourtesy}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Birth Date</h1>
                <p className="id-desc">{employees?.birthDate}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Hire Date</h1>
                <p className="id-desc">{employees?.hireDate}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Address</h1>
                <p className="id-desc">{employees?.address}</p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">City</h1>
                <p className="id-desc">{employees?.city}</p>
              </div>
            </div>
            <div className="id-field-card">
              <div className="id-field-content">
                <h1 className="id-header">Postal Code</h1>
                <p className="id-desc">{employees?.postalCode}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Country</h1>
                <p className="id-desc">{employees?.country}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Home Phone</h1>
                <p className="id-desc">{employees?.homePhone}</p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Extension</h1>
                <p className="id-desc">{employees?.extension} </p>
              </div>
              <div className="id-field-content">
                <h1 className="id-header">Notes</h1>
                <p className="id-desc">{employees?.notes} </p>
              </div>
              <div className="id-field-content without-margin">
                <h1 className="id-header">Reports To</h1>
                <Link
                  className="id-desc link-employees"
                  to={`/employee/${employees?.reportsTo}`}
                >
                  {employees?.reportsToName ? employees?.reportsToName : "-"}
                </Link>
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

export default EmployeeInfo;
