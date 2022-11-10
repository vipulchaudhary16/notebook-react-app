import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";

function Login(props) {
  const host = "https://backend-database-for-notebook.vercel.app";

  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

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
    console.log(loginJSON);
    if (loginJSON.success) {
      //Save the auth token to local storage and redirect to users note
      localStorage.setItem("token", loginJSON.authToken);
      localStorage.setItem("email", user.email);
      history.push("/");
      props.showAlert("Welcome back", "success");
    } else {
      props.showAlert(loginJSON.error, "danger");
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container xs:w-75 lg:w-25 ">
      <div>
        <h3 className="text-center py-4">Login to VeerZa Notebook</h3>
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
    </div>
  );
}

export default Login;
