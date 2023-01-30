import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-home-section">
        <div className="card-content">
          <h1 className="main-title">Welcome to Northwind Traders</h1>
          <p className="running-on">Running on Cloudflare's D1</p>
          <p className="northwind-desc">
            This is a demo of the Northwind dataset, running on&nbsp;
            <a href="https://workers.cloudflare.com/" className="link-in-desc">
              Cloudflare Workers
            </a>
            , and D1 - Cloudflare's newest SQL database, <br /> running on
            SQLite.
          </p>
          <img
            className="northwind-image"
            src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public"
          ></img>
          <p className="northwind-desc one-string">
            Read our&nbsp;
            <a
              href="https://blog.cloudflare.com/introducing-d1/"
              className="link-in-desc"
            >
              D1 announcement
            </a>
            &nbsp;to learn more about D1.
          </p>
          <p className="northwind-desc one-string">
            This dataset was sourced from{" "}
            <a
              href="https://github.com/jpwhite3/northwind-SQLite3"
              className="link-in-desc"
            >
              northwind-SQLite3
            </a>
            .
          </p>
          <p className="northwind-desc">
            You can use the UI to explore Supplies, Orders, Customers, Employees
            and Products, or you can use search if you know what <br /> you're
            looking for.
          </p>
        </div>
      </main>
    </div>
  );
};
