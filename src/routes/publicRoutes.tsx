import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import Suppliers from "../screens/suppliers/Suppliers";
import Products from "../screens/products/Products";
import Orders from "../screens/orders/Orders";
import Employees from "../screens/employees/Employees";
import Search from "../screens/Search";
import CustomerInfo from "../screens/customers/CustomerInfo";
import Customers from "../screens/customers/Customers";
import EmployeeInfo from "../screens/employees/employeeInfo";
import SuppliersInfo from "../screens/suppliers/suppliersInfo";
import OrderInfo from "../screens/orders/orderInfo";
import ProductsInfo from "../screens/products/productsInfo";
import ReportToEmployee from "../screens/employees/reportToEmployee";

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
  {
    path: `/customers/:id`,
    element: <CustomerInfo />,
  },
  {
    path: `/employees/:id`,
    element: <EmployeeInfo />,
  },
  {
    path: `/employee/:id`,
    element: <ReportToEmployee />,
  },
  {
    path: `/suppliers/:id`,
    element: <SuppliersInfo />,
  },
  {
    path: `/orders/:id`,
    element: <OrderInfo />,
  },
  {
    path: `/products/:id`,
    element: <ProductsInfo />,
  },
];
export default publicRoutes;
