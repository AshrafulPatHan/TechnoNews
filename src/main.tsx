import * as React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router";
import './index.css'
import App from './App'
import Nav from './components/navigation/Navbar.jsx'
import { Toaster } from 'react-hot-toast';

import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {path: "/",element: <App />},
  {path: "/nav",element: <Nav/>},
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
    <Toaster />
  </div>
  
);

