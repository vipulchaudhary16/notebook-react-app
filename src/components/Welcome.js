import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Welcome() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="main_container">
      <div className="container_content">
        <div className="left_box">
          <h4>Welcome </h4>
          <p className="description maven-pro-font">
            VeerZa Notebook website is a painless and hassle-free solution to
            store all your notes. It is completely accessible from any device
            providing a smooth experience from start to finish. All your notes
            are saved in the cloud, so you can access them anytime and anywhere
          </p>
          <button className="btn_create_acc">
            <Link to="/signup">Create Account</Link>
          </button>
        </div>
        <div className="right_box">
          <Login/>
        </div>
      </div>
    </div>
  );
}
