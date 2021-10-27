import React from "react";

export default function Alert(props) {
  const capatilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>  
        <div
          className={`alert alert-success`}
          role="alert"
        >
          {props.message}
        </div>
      
    </div>
  );
}
