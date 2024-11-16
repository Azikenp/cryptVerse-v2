import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App.jsx";
import {
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import store from "./app/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/exchanges",
        element: <Exchanges />,
      },
      {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "/news",
        element: <News />,
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
