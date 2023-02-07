import { Home } from "./../pages/Home";
import { Dashboard } from "./../pages/Dashboard";
import { Suppliers } from "./../pages/Suppliers";
import { Products } from "./../pages/Products";
import { Orders } from "./../pages/Orders";
import { Employees } from "./../pages/Employees";
import { Customers } from "./../pages/Customers";
import Search from "./../pages/Search";

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
