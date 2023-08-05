
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/styles.css";

function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = data;

  const [error, setError] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    setData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }

  }

  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }

  return (
    <div className="Authentication">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h1>Welocome to Mystical Voyages !</h1>
              </div>
              <div className="card-body">

                <button className="btn btn-block btn-social btn-google mb-4" type="submit" style={{ backgroundColor: "#dd4b39" }} onClick={googleLogin}>
                  <i className="fab fa-google me-2"></i>
                  Sign Up with Google
                </button>

                <div className="divider">OR</div>

                <form onSubmit={handleSubmit}>

                  <div className="form-floating mb-3 input-box">
                    <input type="email" className="form-control input-text" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleChange} />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3 input-box">
                    <input type="password" className="form-control input-text" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <p className="fw-bold mt-3 pt-1 mb-3">Don't have an account? <Link to="/register">Register</Link></p>

                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  {error && <div style={{ color: "white" }}>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </div>
  );
}

export default Login;