import { React, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../context/Alert/alertContext";
import Loader from "./Loader";
import { host } from "../context/Notes/noteState";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { showAlert } = useContext(AlertContext)

  let history = useHistory({});
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const loginJSON = await response.json();
    if (loginJSON.success) {
      //Save the auth token to local storage and redirect to users note
      localStorage.setItem("token", loginJSON.authToken);
      localStorage.setItem("email", user.email);
      history.push("/");
      showAlert("Welcome back", "success__alert");
    } else {
      showAlert(loginJSON.error, "danger__alert");
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
      <div>
        <h5 className="text-center py-2">Login to VeerZa Notebook</h5>
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={onChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <Loader loading={loading} /> : "Login"}
          </button>
        </form>
    </div>
  );
}

export default Login;
