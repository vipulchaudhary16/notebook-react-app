import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader(props) {
  return (
    <div className="sweet-loading">
      <ClipLoader
        loading={props.loading}
        size={25}
      />
    </div>
  );
}
