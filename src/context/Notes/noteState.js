import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const state1 = {
    name: "veerZa",
  };
  const [state, setState] = useState(state1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Kinju",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}{" "}
    </NoteContext.Provider>
  );
};

export default NoteState;
