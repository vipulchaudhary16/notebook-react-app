import React from "react";

function Alert(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "25px",
        backgroundColor: "#74EBD5",
        backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show w-100`}
          role="alert"
        >
          <div style={{ width: "100vw" }}>{props.alert.msg}</div>
        </div>
      )}
    </div>
  );
}

export default Alert;
