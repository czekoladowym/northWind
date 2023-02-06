import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

type Customer = {
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  city: string;
  country: string;
  address: string;
  phone: string;
};
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
  content: [];
  logs: Logs;
};

export const Search = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [seacrhValue, setSeacrhValue] = useState<string>("");
  const [table, setTable] = useState<string>("products");

  const getContent = useCallback(async () => {
    if (!seacrhValue) {
      return;
    }
    const res: AxiosResponse<Response> = await axios.post(
      `https://nortwind-backend-rodkin.onrender.com/search/${seacrhValue}`,
      { tableForSearch: table }
    );
    table == "customers"
      ? setCustomers(res.data.content)
      : setProducts(res.data.content);
  }, [table, setCustomers, setProducts, seacrhValue]);

  useEffect(() => {
    getContent();
  }, [table]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      getContent();
    }
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <main className="main-section">
        <div className="search-content">
          <h1 className="search-title">Search Database</h1>
          <div className="seacrh-input-card">
            <span className="material-icons search">search</span>
            <input
              type="text"
              placeholder="Enter keyword..."
              className="input-search"
              onChange={(e) => setSeacrhValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="search-table">
              <h1 className="search-title tables">Tables</h1>
              <div className="custom-radio">
                <label
                  className="container-radio"
                  onClick={() => setTable("products")}
                >
                  Products
                  <input
                    type="radio"
                    name="radio-input"
                    checked={table == "products"}
                  />
                  <span className="checkmark"></span>
                </label>
                <label
                  className="container-radio"
                  onClick={() => setTable("customers")}
                >
                  Customers
                  <input
                    type="radio"
                    name="radio-input"
                    checked={table == "customers"}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <h1 className="search-title results">Search results</h1>
            <div className="search-result">
              <section>
                {table == "products"
                  ? products.map((product, i) => (
                      <div className="product-section">
                        <a href="#" className="search-link">
                          {product.name}
                        </a>
                        <p className="search-info">
                          {"#" + (products.indexOf(product) + 1)}, Quantity Per
                          Unit: {product.qtPerUnit}, Price: {product.price},
                          Stock: {product.stock}
                        </p>
                      </div>
                    ))
                  : customers.map((customer, i) => (
                      <div className="product-section">
                        <a className="search-link">{customer.companyName}</a>
                        <p className="search-info">
                          {"#" + (customers.indexOf(customer) + 1)}, Contact:{" "}
                          {customer.contactName}, Title: {customer.contactTitle}
                          , Phone: {customer.phone}
                        </p>
                      </div>
                    ))}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
