import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import Products from "./assets/pages/Products";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions)

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <Products /> },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
