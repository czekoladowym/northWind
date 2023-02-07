import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Products } from "../pages/Products";
import { Suppliers } from "../pages/Suppliers";
import { Dashboard } from "../pages/Dashboard";
import { Employees } from "../pages/Employees";
import { Customers } from "../pages/Customers";
import Search from "../pages/Search";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dash",
    element: <Dashboard />,
  },
  {
    path: "/suppliers",
    element: <Suppliers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/search",
    element: <Search />,
  },
];
export default publicRoutes;
