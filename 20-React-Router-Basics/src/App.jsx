import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import Products from "./assets/pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
