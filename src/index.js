import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import Root from "./routes/root";
import Home from "./routes/home";
import ProductsPage from "./routes/products-page";
import HelpPage from "./routes/help-page";
import AboutPage from "./routes/about-page";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";
import { store } from "./features/store/store";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/products",
            element: <ProductsPage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/help",
            element: <HelpPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
