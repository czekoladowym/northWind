import { Home } from "../screens/Home";
import { Dashboard } from "../screens/Dashboard";
import { Suppliers } from "../screens/Suppliers";
import { Products } from "../screens/Products";
import { Orders } from "../screens/Orders";
import { Employees } from "../screens/Employees";
import { Customers } from "../screens/Customers";
import Search from "../screens/Search";

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
