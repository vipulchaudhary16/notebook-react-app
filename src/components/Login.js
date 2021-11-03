import {React, useState } from "react";
import {useHistory } from "react-router-dom";

function Login(props) {
  const host = "http://localhost:5000";

  const [user, setUser] = useState({ email: "", password: ""})
  let history = useHistory({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email : user.email, password:user.password }),
    });
    const loginJSON = await response.json();
    console.log(loginJSON);
    if(loginJSON.success){
        //Save the auth token to local storage and redirect to users note
        localStorage.setItem('token' , loginJSON.authToken);
        history.push("/")
        props.showAlert("Welcome back" , "success")
      }
      else{
        props.showAlert("invalid credentials", "danger")
        
    }
  };

  const onChange = (e)=>{
      setUser({...user , [e.target.name]:e.target.value})
  }
  return (
    <div className="py-2">
      <form
        className="d-flex flex-column align-items-center  justify-content-center w-80"
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
