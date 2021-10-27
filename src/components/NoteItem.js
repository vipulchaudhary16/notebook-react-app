import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-2">
          <h5 class="card-header">{note.title}</h5>
          <div class="card-body">
            <p class="card-text">
            {note.description}  
            </p>
          </div>
      </div>
    </div>
  );
}

export default NoteItem;
