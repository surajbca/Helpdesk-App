import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., call an API to authenticate user)
    console.log(`Login with username: ${username} and Password: ${password}`);
    // Reset username and password after handling the login
    setusername("");
    setPassword("");
  };

  let LoginCard = {
    marginTop: "20px",
    marginLeft: "18em",
    width: "65em",
    height: "45em",
    background: "#08e8de ",
    paddingTop: "5.5em",
  };

  let LoginCardBody = {
    marginTop: "1px",
    marginLeft: "160px",
    width: "45em",
    height: "35em",
    background: "#b2ffff",
    padding: "8em",
  };

  let Loginbutton = {
    paddingLeft: "50px",
    paddingRight: "50px",
  };

  return (
    <>
      <div className=" " style={LoginCard}>
        <div className="card " style={LoginCardBody}>
          <h1 className="text-center">Helpdesk System</h1>
          <div>
            <form onSubmit={handleLogin} className="mb-3 ">
              <div>
                <input
                  placeholder="username"
                  className="form-control mt-4"
                  type="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className="form-control mt-3"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={Loginbutton}
                >
                  Sign In
                </button>
              </div>
              <div className="row">
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
      </div>
    </>
  );
};

export default Login;
