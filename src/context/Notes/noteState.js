import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  //Getting all notes while user is logged in
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NmRkM2QyYzE4NzljZjMwZTJiZGYzIn0sImlhdCI6MTYzNDgxNDAwNX0.P-0s1Eq3dtsFtgLfnDyKO6ANLP6LgbkFxisHBvNLHmc"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const notesInitial = [];
  //State for note perpose work , add , delete and edit
  const [notes, setNotes] = useState(notesInitial);

  //to add new note
  //TODO : Tag Work
  const addNote = async (title, description, tag) => {
    //API call in TODO
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NmRkM2QyYzE4NzljZjMwZTJiZGYzIn0sImlhdCI6MTYzNDgxNDAwNX0.P-0s1Eq3dtsFtgLfnDyKO6ANLP6LgbkFxisHBvNLHmc"
      },
      body: JSON.stringify({title , description, tag}),
    });
    const note = {
      _id: "617537604f1b39246a8db4b695",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: title,
      description: description,
      tag: tag,
      date: "2021-10-24T10:37:20.868Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    // setNotes(notes.concat(response));
  };

  //To edit a note
   const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NmRkM2QyYzE4NzljZjMwZTJiZGYzIn0sImlhdCI6MTYzNDgxNDAwNX0.P-0s1Eq3dtsFtgLfnDyKO6ANLP6LgbkFxisHBvNLHmc"
      },
      body: JSON.stringify({title , description, tag}),
    });
    const json= response.json();

    for (let index = 0; index < notes.length; index++) {
      //Find and update
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //To delete note
  const deleteNote = (id) => {
    console.log("Deleting a note id : " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{notes,getAllNotes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
