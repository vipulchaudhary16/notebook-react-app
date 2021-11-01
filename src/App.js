import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/Notes/noteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          {/* <Alert message="This is amazing"/> */}
          <Navbar />
          <div
            className="px-3 mh-100vh"
            // style={{
            //   background:
            //     "linear-gradient(to bottom right ,#d97b34 ,  #eaedd8 ,  #008000 )",
            // }}
            style={{
              "background-color": "#74EBD5",
              "background-image":
              "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
                "minHeight": "100vh",
            }}
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
