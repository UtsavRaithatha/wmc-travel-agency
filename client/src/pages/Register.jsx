
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/styles.css";
import BACKEND_URL from "../config";

function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { firstName, lastName, email, password } = data;

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
      const url = `${BACKEND_URL}/api/users`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }

  }

  const googleLogin = () => {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }

  return (<div className="Authentication">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
            Welocome to Mystical Voyages !
            </div>
            <div className="card-body">

              <button className="btn btn-block btn-social btn-google mb-4" type="submit" style={{backgroundColor: "#dd4b39"}} onClick={googleLogin}>
                <i className="fab fa-google me-2"></i>
                Sign Up with Google
              </button>

              <div className="divider">OR</div>

              <form onSubmit={handleSubmit}>

                <div className="form-floating mb-3 input-box">
                  <input type="text" className="form-control input-text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} />
                  <label htmlFor="floatingInput">First Name</label>
                </div>

                <div className="form-floating mb-3 input-box">
                  <input type="text" className="form-control input-text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>

                <div className="form-floating mb-3 input-box">
                  <input type="email" className="form-control input-text" placeholder="name@example.com" name="email" value={email} onChange={handleChange} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3 input-box">
                  <input type="password" className="form-control input-text" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleChange} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <p className="fw-bold mt-3 pt-1 mb-3"> Already a user? <Link to="/login">Login</Link></p>

                <button type="submit" className="btn btn-primary btn-lg">Register</button>

                {error && <div style={{color: "white"}}>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
  </div>);
}

export default Register;