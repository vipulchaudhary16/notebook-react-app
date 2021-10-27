import React from 'react'

function AddNote() {
    return (
      <div className="my-3 col-md-3">
      <h3>Add a Note</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputTitle" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputDescription" class="form-label">
            Description
          </label>
          <textarea
            type="text-area"
            rows="3"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
      </div>
    )
}

export default AddNote
