import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Login from './components/login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
