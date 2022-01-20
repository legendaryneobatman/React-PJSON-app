import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/styles/App.css"
import {Route, Router, Routes, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/Header/Header";


function App() {

  return (
      <>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/posts" element={<Posts/>} />
        </Routes>
      </>

  );
}
export default App;


