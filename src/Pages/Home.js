const Home = () => {
  let DashBord = {
    marginTop: "-70px",
    background: "#d3d3d3",
    height: "43em",
    width: "15em",
    paddingBottom: "12px",
  };
  let tickets = {
    borderRadius: "10px",
    height: "15em",
    width: "10em",
    background: "#0000ff",
  };
  let solve = {
    borderRadius: "10px",
    height: "15em",
    width: "10em",
    background: "#32cd32",
  };
  let Approvel = {
    borderRadius: "10px",
    height: "15em",
    width: "10em",
    background: "red",
  };
  let progress = {
    borderRadius: "10px",
    height: "15em",
    width: "15em",
    background: "#ffff00",
  };

  let footer = {
    padding: "15px",
    background: "#08e8de ",
  };
  return (
    <>
      <div>
        <div className="row ">
          <h2 className="text-center mt-4">DashBord</h2>
          <div style={DashBord} className="col-4">
            <div className="text-center">
              <span
                className=""
                style={{
                  fontSize: "27px",
                  marginRight: "20px",
                  marginLeft: "-45px",
                }}
              >
                <i className="fa-solid fa-chevron-right "></i>
              </span>
              <span
                style={{
                  fontSize: "27px",
                  marginRight: "15px",
                  marginLeft: "",
                }}
              >
                <i class="fa-solid fa-calendar"></i>
              </span>

              <span>DashBord</span>
            </div>
            <div className="text-center ">
              <span style={{ fontSize: "27px", marginRight: "15px" }}>
                <i class="fa-solid fa-ticket"></i>
              </span>
              <span>New Ticket</span>
            </div>
            <div className="text-center">
              <span style={{ fontSize: "27px", marginRight: "15px" }}>
                <i class="fa-solid fa-ticket-simple"></i>
              </span>
              <span>My Ticket</span>
            </div>
          </div>
          <div className="col m-4 text-center" style={tickets}>
            <h5 className="mt-2">Total Ticket</h5>
            <p style={{ fontSize: "138px", marginTop: "12px" }}>12</p>
          </div>
          <div className="col m-4 text-center" style={solve}>
            <h5 className="mt-2">Total Solve</h5>
            <p style={{ fontSize: "138px", marginTop: "12px" }}>8</p>
          </div>
          <div className="col m-4 text-center" style={Approvel}>
            <h5 className="mt-2">Total Waiting Approval</h5>
            <p style={{ fontSize: "138px", marginTop: "12px" }}>2</p>
          </div>
          <div className="col m-4 text-center" style={progress}>
            <h5 className="mt-2">Total in progress</h5>
            <p style={{ fontSize: "138px", marginTop: "12px" }}>2</p>
          </div>
          <br />
          <div style={footer} className="row text-center">
            <h5>Footer Area</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
