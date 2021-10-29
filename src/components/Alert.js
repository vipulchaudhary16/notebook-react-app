import React from "react";

export default function Alert(props) {
 
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
