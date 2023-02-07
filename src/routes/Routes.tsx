import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import publicRoutes from "./publicRoutes";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
