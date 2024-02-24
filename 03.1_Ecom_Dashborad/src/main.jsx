import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { About, Cart, Home, Login, Private, AddProduct, Profile, Register, Product, UpdateProduct } from "./Componants";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Private/>}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="product" element={<Product/>} />
        <Route path="addproduct" element={<AddProduct />}/>
        <Route path="updateproduct/:id" element={<UpdateProduct/>}/>
        <Route path="profile" element={<Profile />}/>
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
