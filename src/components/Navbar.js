import { React, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  let history = useHistory();
  const { showAlert } = props;

  useEffect(() => {}, [location]);

  const [dashDisplay, setDashDisplay] = useState("d-none");

  const showHideForm = () => {
    if (dashDisplay === "d-none") {
      setDashDisplay("");
    } else {
      setDashDisplay("d-none");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("Logged Out", "success");
    history.push("/login");
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
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link className="btn btn-primary" to="/signup" role="button">
                  Signup
                </Link>
              </form>
            ) : (
              <div className="d-flex">
                <button
                  className="btn btn-primary mx-2"
                  role="button"
                  onClick={showHideForm}
                >
                  user
                </button>

                <div
                  class={`card position-absolute ${dashDisplay}`}
                  style={{ right: 3, width: "20vw", top: 60 }}
                >
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link
                      className="btn btn-primary mx-2"
                      to="/login"
                      role="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
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
