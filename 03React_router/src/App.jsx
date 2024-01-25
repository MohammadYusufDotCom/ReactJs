import React from "react";
import Footer from "./Componant/Footer";
import Header from "./Componant/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  );
}

export default App
