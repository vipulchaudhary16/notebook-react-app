import { React, useContext , useEffect } from "react";
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes , getAllNotes } = context;
  useEffect(() => {
    getAllNotes();
  },[])
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h3>Your Notes</h3>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
