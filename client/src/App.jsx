import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {

  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/explore" element={user ? <Explore /> : <Login />} />
          <Route path="/contact" element={user ? <Contact /> : <Login />} />
          <Route path="/about" element={user ? <About /> : <Login />} />
          <Route path="/api/explore/:key" element={user ? <TravelPackage /> : <Login />} />
          <Route path="/api/add-travel-package" element={<AddTravelPackage />} />
          <Route path="/api/edit-travel-package/:key" element={<EditTravelPackage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
