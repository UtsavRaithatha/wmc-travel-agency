import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";


function App() {

  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
