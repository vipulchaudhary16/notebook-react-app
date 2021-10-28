import {React , useContext} from "react";
import noteContext from "../context/Notes/noteContext";
import "../CSS/NoteItem.css";

function NoteItem(props) {
  const { note } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5>{note.title}</h5>
          <div>
            <i className="fa fa-pencil mx-2"></i>
            <i
              className="fa fa-trash-o mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
