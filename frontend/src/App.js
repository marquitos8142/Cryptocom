import logo from './logo.svg';
import './App.css';
import Footer from "./component/Footer";
import Home from "./component/home";
import Register from "./component/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
