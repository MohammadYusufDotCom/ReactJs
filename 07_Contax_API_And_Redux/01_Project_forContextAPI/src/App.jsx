import { useState, useContext } from "react";
import { ConutContextProvider } from "./context/Context";
import { ConutContext } from "./context/Context";
import Button from "./Component/Button";

function Component(){
  const {count} = useContext(ConutContext)
  return(
  <div>
    <h1 style={{textAlign:"center"}}>Count is {count} </h1>
  </div>)
}

function App() {
  return (
    <ConutContextProvider>
      <Component />
      <Button />
      <Button />
      <Button />
    </ConutContextProvider>
  );
}

export default App;
