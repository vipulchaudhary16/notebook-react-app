import { React, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Loader from "./Loader";

function Signup(props) {
  const host = "https://backend-database-for-notebook.vercel.app";

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (user.cpassword !== user.password) {
      props.showAlert("password does not match", "danger");
      setLoading(false);
      return;
    }
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });
    const signUpJSON = await response.json();
    console.log(signUpJSON);
    if (signUpJSON.success) {
      //Save the auth token to local storage and redirect to users note
      localStorage.setItem("token", signUpJSON.authToken);
      localStorage.setItem("email", user.email);
      history.push("/");
      props.showAlert(
        `Dear ${user.name} Your account has been created`,
        "success"
      );
    } else {
      props.showAlert(signUpJSON.error, "danger");
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="main_container">
      <div className="container_content mt-4">
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center py-4">
            Create Account to save your notes
          </h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={user.name}
              onChange={onChange}
              required
            />
          </div>
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
              minLength={4}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="form-control"
              value={user.cpassword}
              onChange={onChange}
              minLength={4}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {loading ? <Loader loading={loading} /> : "Create Account"}
          </button>
          <p className="mt-2 text-center">
            {" "}
            <Link to="/welcome">Already Have Account? Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
