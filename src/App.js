import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Orphanages from "./pages/Orphanages";
import Home from "./pages/Home";
import Actu from "./pages/Actu";
import AboutUs from "./pages/AboutUs";
import ContactPage from './pages/Contact'
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Banner/>}>
            <Route exact  path="/" element={<Home/>} />
            <Route path="/Actu" element={<Actu />} />
            <Route path="/Orphanages" element={<Orphanages />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Myprofile" element={<Profile />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
          
        </Routes>
        <Footer />
      </Router>
      {/* <Carousel images={images} /> */}
    </div>
  );
}

export default App;
