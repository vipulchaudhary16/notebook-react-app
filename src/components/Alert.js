import React from "react";

function Alert(props) {
  return (
    <div>
      {props.alert && (
        <div className={"alert__container " + props.alert.type}>
          <p>{props.alert.msg}</p>
        </div>
      )}
    </div>
  );
}

export default Alert;
