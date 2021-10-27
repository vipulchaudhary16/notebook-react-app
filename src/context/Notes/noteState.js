import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "617537604f1b39246a8db4b6",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 1",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:20.868Z",
      __v: 0,
    },
    {
      _id: "617537604f1b39246a8db4b69",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 1",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:20.868Z",
      __v: 0,
    }
  ];
  const [notes, setNotes] = useState(notesInitial)

  const addNote = (title, description , tag) => {
    console.log("Adding a new note")
    const note = {
      _id: "617537604f1b39246a8db4b69",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: title,
      description: description,
      tag: tag,
      date: "2021-10-24T10:37:20.868Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    
  }
  const editNote = ()=>{

  }
  const deleteNote = ()=>{

  }
    
    return (
        <NoteContext.Provider value={{notes, addNote ,editNote,deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
