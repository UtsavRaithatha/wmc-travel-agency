import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import About from './pages/About';
import Background from './components/Background';
import TravelPackage from './pages/TravelPackage';
import "./styles.css";
import AddTravelPackage from './pages/AddTravelPackage';
import EditTravelPackage from './pages/EditTravelPackage';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import Profile from './pages/Profile';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setUser(decodedToken.user);
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      }
    }
    else {
      const checkAuthentication = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/auth/check", { withCredentials: true });
          const data = response.data;
          
          if (data.isLoggedIn && data.user) {
            console.log(data.user);
            setUser(data.user.doc);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.log("Error while checking authentication status:", error);
        }
      };
      checkAuthentication();
    }
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
  
      await fetch("http://localhost:5000/logout", {
        method: "GET",
        credentials: "include",
      });
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  const isAdmin = user && user.role === "admin";

  console.log(user);

  return (
    <div className="App">
      <Background />
      <BrowserRouter>
        {user && <Navbar onLogout={handleLogout} link={user.picture} />}
        <Routes>
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
          <Route path="/profile" element={user ? <Profile userDetails={user} /> : <Navigate replace to="/login" />} />
          <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/api/explore" element={user ? <Explore isAdmin={isAdmin}/> : <Navigate replace to="/login" />} />
          <Route path="/contact" element={user ? <Contact /> : <Navigate replace to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate replace to="/login" />} />
          <Route path="/api/explore/:key" element={user ? <TravelPackage /> : <Navigate replace to="/login" />} />
          {isAdmin && <Route path="/api/add-travel-package" element={<AddTravelPackage />} />}
          {isAdmin && <Route path="/api/edit-travel-package/:key" element={<EditTravelPackage />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
