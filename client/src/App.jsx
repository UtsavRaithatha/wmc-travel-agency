import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import About from './pages/About';
import Background from './components/Background';
import TravelPackage from './pages/TravelPackage';
import AddTravelPackage from './pages/AddTravelPackage';
import EditTravelPackage from './pages/EditTravelPackage';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import ViewBookings from './pages/ViewBookings';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import BACKEND_URL from "./config";
import "./assets/css/styles.css";

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
          const response = await axios.get(`${BACKEND_URL}/api/auth/check`, { withCredentials: true });
          const data = response.data;
          
          if (data.isLoggedIn && data.user) {
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

      setUser(null);

      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      else {
        axios.get(`${BACKEND_URL}/logout`, { withCredentials: true })
          .then((response) => {
            if (response.data === "done") {
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.error('Error logging out:', error);
          });
      }

    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  const isAdmin = user && user.role === "admin";

  return (
    <div className="App">
      <Background />
      <BrowserRouter>
        {user && <Navbar onLogout={handleLogout} link={user.picture} isAdmin={isAdmin}/>}
        <Routes>
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
          <Route path="/profile" element={user ? <Profile userDetails={user} /> : <Navigate replace to="/login" />} />
          <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
          <Route path="/api/explore" element={user ? <Explore isAdmin={isAdmin}/> : <Navigate replace to="/login" />} />
          <Route path="/contact" element={user ? <Contact /> : <Navigate replace to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate replace to="/login" />} />
          <Route path="/FAQ" element={user ? <FAQ /> : <Navigate replace to="/login" />} />
          <Route path="/api/explore/:key" element={user ? <TravelPackage userid={user._id} /> : <Navigate replace to="/login" />} />
          <Route path="/booking/:userid/:key" element={<Booking />} />
          {isAdmin && <Route path="/api/add-travel-package" element={<AddTravelPackage />} />}
          {isAdmin && <Route path="/api/edit-travel-package/:key" element={<EditTravelPackage />} />}
          {isAdmin && <Route path="/api/view-bookings" element={<ViewBookings />} />}
          </Routes>
          {user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
