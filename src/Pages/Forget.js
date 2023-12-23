import React, { useState } from "react";
import { Link } from "react-router-dom";
const Forget = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement your logic here (e.g., send a reset link to the provided email)
    console.log(`Forgot Password for Email: ${email}`);
    // Reset form field after handling the password reset request
    setEmail("");
  };

  let ForgetCard = {
    marginTop: "20px",
    marginLeft: "18em",
    width: "65em",
    height: "45em",
    background: "#08e8de ",
    paddingTop: "5.5em",
  };

  let ForgetCardBody = {
    marginTop: "1px",
    marginLeft: "160px",
    width: "45em",
    height: "35em",
    background: "#b2ffff",
    padding: "8em",
  };

  let SubmitpButton = {
    paddingLeft: "50px",
    paddingRight: "50px",
  };

  let SingInbutton = {
    background: "#17f42b",
    paddingLeft: "50px",
    paddingRight: "50px",
  };
  return (
    <>
      <div style={ForgetCard}>
        <div style={ForgetCardBody}>
          <p className="text-center">
            Don't worry,Enter your email below and we will send you a link to
            change password
          </p>
          <form onSubmit={handleForgotPassword} className="mb-3">
            <div>
              <input
                placeholder="Email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                style={SubmitpButton}
              >
                Submit
              </button>
            </div>
            <div className="text-center mt-4">
              <Link to="/Login" className="">
                <button type="submit" className="btn " style={SingInbutton}>
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forget;
