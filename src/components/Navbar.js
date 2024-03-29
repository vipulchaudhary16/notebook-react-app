import { React, useContext, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import AlertContext from "../context/Alert/alertContext";

export default function Navbar() {
  let location = useLocation();
  let history = useHistory();
  const { showAlert } = useContext(AlertContext);

  const [user, setUser] = useState({ name: "Test", email: "Test@gmail.com" });

  useEffect(() => {
    setUser({ name: "Ravina", email: localStorage.getItem("email") });
  }, [location]);

  const [dashDisplay, setDashDisplay] = useState("d-none");

  const showHideForm = () => {
    if (dashDisplay === "d-none") {
      setDashDisplay("");
    } else {
      setDashDisplay("d-none");
    }
    setUser({ name: "Ravina", email: localStorage.getItem("email") });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    showAlert("Logged Out", "success__alert");
    history.push("/welcome");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            VeerZa Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li> */}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">{null}</form>
            ) : (
              <div className="d-flex">
                <button className="btn btn-primary mx-2" onClick={showHideForm}>
                  <i className="fa fa-user"></i>
                </button>

                <div
                  className={`card position-absolute ${dashDisplay} xs:w-75 lg:w-25`}
                  style={{ right: 3, top: 60 }}
                >
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <p className="card-text"></p>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
