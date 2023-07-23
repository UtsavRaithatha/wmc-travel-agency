
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { firstName, lastName, email, password } = user;

  function handleChange(event) {
    const { value, name } = event.target;

    setUser(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    });
  }

  const postData = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName, lastName, email, password
      })
    });

    const data = await response.json();

    if (data.status === 409 || data.status === 500 || !data) {
      window.alert("Registration invalid");
    }
    else {
      window.alert("Registration Successful");
      navigate("/");
    }
  }

  return (<>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              Wizarding World Travel Agency
            </div>
            <div className="card-body">

              <div>
                <Link className="btn btn-block btn-social btn-google mb-4" to="/auth/google" role="button">
                  <i className="fab fa-google"></i>
                  Sign Up with Google
                </Link>
              </div>

              <form method="POST">

                <div className="form-floating mb-3 inputBox">
                  <input type="text" className="form-control inputText" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} />
                  <label htmlFor="floatingInput">First Name</label>
                </div>

                <div className="form-floating mb-3 inputBox">
                  <input type="text" className="form-control inputText" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>

                <div className="form-floating mb-3 inputBox">
                  <input type="email" className="form-control inputText" placeholder="name@example.com" name="email" value={email} onChange={handleChange} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3 inputBox">
                  <input type="password" className="form-control inputText" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleChange} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <p className="fw-bold mt-3 pt-1 mb-3"> Already a user? <Link to="/login"
                  className="link-info">Login</Link></p>

                <button type="submit" className="btn btn-primary btn-lg" onClick={postData}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
  </>);
}

export default Register;