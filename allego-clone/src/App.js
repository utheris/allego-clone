 import React from "react"; 
 import './App.css';
 import {Routes, Route} from "react-router-dom";
 import Header from "./Header"
 import Home from "./Home"
 import Checkout from "./Checkout"
 
function App() {
  return (
      <div className="app">
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
        </>
      }/>
      
      <Route path="/cart" element={
        <>
          <Header /> 
          <Checkout/>
        </>
      }/>
      <Route path="/login" element={
      <>
        <Header /> 
        <h1>Strona logowania</h1>
      </>
      }/>
    </Routes>
   </div>
  ); 
}

export default App;
