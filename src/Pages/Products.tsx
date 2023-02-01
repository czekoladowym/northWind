import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Products = () => {
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
            <tr className="gray-row">
              <td className="row-item">
                <a href="products/1" className="link-name">
                  Chai
                </a>
              </td>
              <td className="row-item">10 boxes x 20 bags</td>
              <td className="row-item">$18</td>
              <td className="row-item">39</td>
              <td className="row-item">0</td>
            </tr>
            <tr className="white-row">
              <td className="row-item">
                <a href="products/2" className="link-name">
                  Chang
                </a>
              </td>
              <td className="row-item">24 - 12 oz bottles</td>
              <td className="row-item">$19</td>
              <td className="row-item">17</td>
              <td className="row-item">40</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
