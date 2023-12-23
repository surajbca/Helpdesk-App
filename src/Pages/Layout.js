import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#08e8de" }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link to="/" className="nav-link light" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login" className="nav-link" style={{ color: "black" }}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/Signup" className="nav-link" style={{ color: "black" }}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/Forget" className="nav-link" style={{ color: "black" }}>
              Forget
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          <span style={{ fontSize: "27px", marginRight: "24px" }}>
            <i class="fa-solid fa-bell"></i>
          </span>
          <span style={{ fontSize: "27px", marginRight: "24px" }}>
            <i class="fa-solid fa-user"></i>
          </span>
          <span style={{ fontSize: "27px", marginRight: "24px" }}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </span>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
