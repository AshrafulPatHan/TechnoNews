import * as React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router";
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast';
import ReactDOM from "react-dom/client";
import Error404 from './Error404';
import Login from './page/auth/Login';



const router = createBrowserRouter([
  {path: "/",element: <App />},
  {path: "/login",element: <Login />},
  {path: "*",element: <Error404 />}
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
    <Toaster />
  </div>
);

