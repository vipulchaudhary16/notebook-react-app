import {React, useState } from "react";
import {useHistory } from "react-router-dom";


function Signup(props) {
  const host = "http://localhost:5000";

  const [user, setUser] = useState({name:"", email: "", password: "" , cpassword: ""});
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:user.name, email: user.email, password: user.password }),
    });
    const signUpJSON = await response.json();
    console.log(signUpJSON);
    if(signUpJSON.success){
        //Save the auth token to local storage and redirect to users note
        localStorage.setItem('token' , signUpJSON.authToken);
        history.push("/")
        props.showAlert(`Dear ${user.name} Your account has been created` , "success")
    }
    else{
        props.showAlert("Error creating user" , "danger")
    }
  };
  

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="py-2">
        <form
          className="d-flex flex-column align-items-center  justify-content-center w-80"
          onSubmit={handleSubmit}
        >
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
              minLength = {4}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="form-control"
              value={user.cpassword}
              onChange={onChange}
              minLength = {4}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
