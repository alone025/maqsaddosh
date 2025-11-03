import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Otp from "./pages/otp";
import NavbarBeforeAuth from "./components/navbarBeforeAuth";
import { useEffect } from "react";
import FillingForm from "./pages/fillingForm";

function App() {

  useEffect(()=>{
    const path = window.location.pathname
    if(path && path == '/login'){
      document.body.style.padding =0
    }
  },[])
  return (
    <Router>
      <NavbarBeforeAuth />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/fillingdata" element={<FillingForm />} />

      </Routes>
    </Router>
  );
}

export default App;
