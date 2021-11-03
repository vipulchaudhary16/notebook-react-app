import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/Notes/noteState";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert  alert={alert} />
          <div
            className="px-3"
            style={{
              backgroundColor: "#74EBD5",
              backgroundImage:
                "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
              minHeight: "100vh",
            }}
          >
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
