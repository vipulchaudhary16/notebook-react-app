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
      _id: "617537714f1b39246a8db4b8",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 2",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:37.614Z",
      __v: 0,
    },
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
      _id: "617537714f1b39246a8db4b8",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 2",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:37.614Z",
      __v: 0,
    },
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
      _id: "617537714f1b39246a8db4b8",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 2",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:37.614Z",
      __v: 0,
    },
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
      _id: "617537714f1b39246a8db4b8",
      user: "6166dd3d2c1879cf30e2bdf3",
      title: "myTitle 2",
      description: "Hi am attention , i heard that you are looking for me",
      tag: "personal",
      date: "2021-10-24T10:37:37.614Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial)

    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
