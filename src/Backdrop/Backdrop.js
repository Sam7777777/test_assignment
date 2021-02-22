import React from "react";
import "./Backdrop.css";

export default function Backdrop({ show, closeModal }) {
  // console.log("Backdrop was called");
  return show ? <div onClick={closeModal} className="Backdrop"></div> : null;
}
