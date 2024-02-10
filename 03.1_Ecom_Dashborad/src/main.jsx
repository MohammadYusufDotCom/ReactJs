import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { About, Cart, Home, Login, Private, AddProduct, Profile, Register, Product } from "./Componants";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Private/>}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        
          
          <Route path="product" element={<Product/>} />

        <Route path="/addproduct" element={<AddProduct />}></Route>
         
     

        <Route path="profile" element={<Profile />}></Route>
      </Route>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
