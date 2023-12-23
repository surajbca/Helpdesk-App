import { Link } from "react-router-dom";
import React, { useState } from "react";
const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here (e.g., call an API to register user)
    console.log(`Signup with username: ${username} and Password: ${password}`);
    // Reset form fields after handling the signup
    setusername("");
    setPassword("");
    setemail("");
  };

  let SignupCard = {
    marginTop: "20px",
    marginLeft: "18em",
    width: "65em",
    height: "45em",
    background: "#08e8de ",
    paddingTop: "5.5em",
  };

  let SignupCardBody = {
    marginTop: "1px",
    marginLeft: "160px",
    width: "45em",
    height: "35em",
    background: "#b2ffff",
    padding: "8em",
  };
  let SignupButton = {
    paddingLeft: "50px",
    paddingRight: "50px",
  };
  return (
    <>
      <div className="card" style={SignupCard}>
        <div style={SignupCardBody}>
          <h1 className="text-center">Helpdesk System</h1>
          <p className="text-center">Sign up here</p>
          <form onSubmit={handleSignup} className="mb-3 ">
            <div className="mt-4">
              <input
                placeholder="username"
                className="form-control"
                type="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                placeholder="Password"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                placeholder="Email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                style={SignupButton}
              >
                Signup
              </button>
            </div>
            <div className="row ">
              <div className="col-6 text-center mt-4">
                <Link
                  to="/Forget"
                  className="nav-link "
                  style={{ color: "red" }}
                >
                  Forget password
                </Link>
              </div>
              <div className="col-6 text-center mt-4">
                <Link
                  to="/Signup"
                  className="nav-link "
                  style={{ color: "black" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
