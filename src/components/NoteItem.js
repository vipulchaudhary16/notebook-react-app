import { React, useContext } from "react";
import AlertContext from "../context/Alert/alertContext";
import noteContext from "../context/Notes/noteContext";

function NoteItem(props) {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { showAlert } = useContext(AlertContext);
  return (
    <div className="col-md-3 m-2">
      <div
        className="card my-2"
        style={{ "boxShadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      >
        <div className="card-header d-flex align-items-center  justify-content-between">
          <p className="fw-bold"> {note.title.toUpperCase()} </p>
          <div className="d-flex  ">
            <i
              className="fa fa-pencil mx-2"
              onClick={() => {
                updateNote(note);
              }}
              ></i>
            <i
              className="fa fa-trash-o mx-1"
              onClick={() => {
                deleteNote(note._id);
                showAlert("Note deleted","danger");
              }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{note.description}</p>
          <span className="badge bg-success text-light">{note.tag}</span>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
