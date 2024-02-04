import { useState } from "react";
import Header from "./Componants/Header/header";
import Footer from "./Componants/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout() {
  
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  );
}
export default Layout;
