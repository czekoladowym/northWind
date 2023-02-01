import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Orders = () => {
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
            <th className="id-colomn">Id</th>
            <th className="price-colomn">Total Price</th>
            <th className="products-colomn">Products</th>
            <th className="quantity-colomn">Quantity</th>
            <th className="shipped-colomn">Shipped</th>
            <th className="ship-name-colomn">Ship Name</th>
            <th className="city-colomn">City</th>
            <th className="city-colomn">Country</th>
            <th></th>
          </thead>
          <tbody>
            <tr className="gray-row">
              <td className="row-item">
                <a href="/order/1" className="blue-id">
                  10248
                </a>
              </td>
              <td className="row-item">$440.00</td>
              <td className="row-item">3</td>
              <td className="row-item">27</td>
              <td className="row-item">2012-07-04</td>
              <td className="row-item">Vins et alcools Chevalier</td>
              <td className="row-item">Reims</td>
              <td className="row-item">France</td>
            </tr>
            <tr className="white-row">
              <td className="row-item">
                <a href="/order/2" className="blue-id">
                  10249
                </a>
              </td>
              <td className="row-item">$1863.40</td>
              <td className="row-item">2</td>
              <td className="row-item">49</td>
              <td className="row-item">2012-07-05</td>
              <td className="row-item">Toms Spezialitäten</td>
              <td className="row-item">Münster</td>
              <td className="row-item">Germany</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
