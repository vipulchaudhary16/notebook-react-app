import React from "react";

function Alert(props) {
  const capatilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "#74EBD5",
        backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
