
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  function handleChange(event) {
    const { value, name } = event.target;

    setUser(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    });
  }

  const postData = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await response.json();

    if (data.status === 401 || data.status === 500 || !data) {
      window.alert("Login invalid");
    }
    else {
      window.alert("Login Successful");
      navigate("/");
    }
  }

  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h1>Wizarding World Travel Agency</h1>
              </div>
              <div className="card-body">

                  <div className="btn btn-block btn-social btn-google mb-4" onClick={googleLogin}>
                    <i className="fab fa-google"></i>
                    Sign In with Google
                  </div>

                <form method="POST">

                  <div className="form-floating mb-3 inputBox">
                    <input type="email" className="form-control inputText" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleChange} />
                      <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3 inputBox">
                    <input type="password" className="form-control inputText" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleChange} />
                      <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <p className="fw-bold mt-3 pt-1 mb-3">Don't have an account? <Link to="/register"
                    className="link-info">Register</Link></p>

                  <button type="submit" className="btn btn-primary btn-lg" onClick={postData}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </>
    );
}

export default Login;