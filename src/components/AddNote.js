import { React, useContext , useState } from 'react';
import noteContext from "../context/Notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "" , tag : "default" });

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title , note.description , note.tag);
  };

  const onChange = (e) => {
    setNote({...note , [e.target.name]:e.target.value});
  };
  return (
    <div className="my-3 col-md-3">
      <h3>Add a Note</h3>
      <form>
        <div className="mb-3">
          <label htmlFor=" title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id=" title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
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
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNote;
