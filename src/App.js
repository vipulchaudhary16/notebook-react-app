import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Alert from "./components/Alert";
import { useContext } from "react";
import Welcome from "./components/Welcome";
import AlertContext from "./context/Alert/alertContext";

function App() {
  const { alert } = useContext(AlertContext);
  return (
    <>
      <Router>
        {alert && <Alert alert={alert} />}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </>
  );
}

export default App;
