import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Approuter from "./router/Approuter";
import { AxiosInterceptor } from "./services/axios.interceptor";
import { SnackbarUtilsConfigurator } from './common/snackAlertBar/SnackAlertBar';
import { SnackbarProvider }  from 'notistack'
import "./index.css";

AxiosInterceptor()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <SnackbarUtilsConfigurator/>
      <RouterProvider router={Approuter} />
    </SnackbarProvider>
  </React.StrictMode>
);
