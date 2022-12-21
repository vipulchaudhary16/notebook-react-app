import { React, useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const { showAlert } = props;
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    } else {
      history.push("/welcome");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleUpdateNote = (e) => {
    e.preventDefault(); //It will prevent browser from reloading
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Note updated", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); //Still seems confusing REDO
  };

  return (
    <div>
      <AddNote showAlert={showAlert} />

      {/*Bootstrap modal for editNote */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=" etitle"
                    name="etitle"
                    onChange={onChange}
                    minLength={2}
                    required
                    value={note.etitle}
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
                    id="edescription"
                    name="edescription"
                    minLength={5}
                    required
                    onChange={onChange}
                    value={note.edescription}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor=" tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=" etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNote}
                disabled={
                  note.etitle.length < 2 || note.edescription.length < 5
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3>Your Notes</h3>
        <div>
          {notes.length === 0 && "No notes to display, Click + to add one!"}
        </div>
        <div className="notes_container">
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                updateNote={updateNote}
                note={note}
                showAlert={showAlert}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
