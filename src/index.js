import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AlertState from "./context/Alert/alertState";
import NoteState from "./context/Notes/noteState";

ReactDOM.render(
  <NoteState>
    <AlertState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      ,
    </AlertState>
  </NoteState>,
  document.getElementById("root")
);
