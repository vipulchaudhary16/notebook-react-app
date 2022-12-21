import { React, useContext, useState } from "react";
import noteContext from "../context/Notes/noteContext";
import Loader from "./Loader";

function AddNote(props) {
  //Context sentences
  const context = useContext(noteContext);
  const { addNote } = context;

  //State for adding notes
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const [formDisplay, setFormDisplay] = useState("d-none");

  const [minus_or_plus, setMinusOrPlus] = useState("plus");
  const [loading, setLoading] = useState(false);

  const handleAddNote = (e) => {
    e.preventDefault(); //It will prevent browser from reloading
    addNote(note.title, note.description, note.tag); //Context call
    props.showAlert("Note added", "success");
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); //Still seems confusing REDO
  };

  const showHideForm = () => {
    if (formDisplay === "d-none") {
      setFormDisplay("");
    } else {
      setFormDisplay("d-none");
    }

    if (minus_or_plus === "plus") {
      setMinusOrPlus("minus");
    } else {
      setMinusOrPlus("plus");
    }
  };

  return (
    <div className="p-4">
      <button className="btn btn-secondary" onClick={showHideForm}>
        <i className={`fa fa-${minus_or_plus}`}></i>
      </button>

      <div className={`my-3 col-md-3 ${formDisplay} container `} id="form">
        <h3 className="text-center">Add a Note</h3>
        <form className="d-flex flex-column justify-content-center">
          <div className="mb-2">
            <label htmlFor=" title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id=" title"
              name="title"
              onChange={onChange}
              minLength={2}
              required
              value={note.title}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=" description" className="form-label">
              Description
            </label>
            <textarea
              type="text-area"
              rows="3"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=" tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id=" tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button
            disabled={note.title.length < 2 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleAddNote}
          >
            {loading ? <Loader loading={loading} /> : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
