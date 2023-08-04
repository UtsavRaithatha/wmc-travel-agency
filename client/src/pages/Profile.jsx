import React from "react"

export default function Profile({userDetails}) {
  return (
    <div className="Profile">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card text-center">
                <img
                  src={typeof userDetails.picture === "undefined" ? "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" : userDetails.picture }
                  className="card-img-top rounded-circle mt-4"
                  alt="Profile"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="card-body">
                  <h4 className="card-title pb-3">{userDetails.firstName + " " + userDetails.lastName}</h4>
                  <p className="card-text pb-3">Email: {userDetails.email}</p>
                  <p className="card-text pb-3">First Name: {userDetails.firstName}</p>
                  <p className="card-text pb-3">Last Name: {userDetails.lastName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>    
    </div>
  )
}

