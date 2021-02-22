import React from "react";
import "./Modal.css";

export default function Modal(props) {
  //   return props.show ? <div className="Modal">{props.children}</div> : null;
  return (
    <>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-500vh)",
          opacity: props.show ? "1" : "0",
        }}
        className="Modal"
      >
        {props.children}
      </div>
    </>
  );
}
