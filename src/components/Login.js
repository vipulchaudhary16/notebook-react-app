import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const host = "https://backend-database-for-notebook.vercel.app";

  const [user, setUser] = useState({ email: "", password: "" });
  let history = useHistory({});

  const handleSubmit = async (e) => {
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
      localStorage.setItem('email', user.email);
      history.push("/");
      props.showAlert("Welcome back", "success");
    } else {
      props.showAlert(loginJSON.error, "danger");
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="py-4 w-100 ">
      <h3 className="text-center py-4">Login to VeerZa Notebook</h3>
      <form
        className="container w-25 d-flex flex-column justify-content-center"
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
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
