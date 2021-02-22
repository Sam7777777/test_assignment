import React from "react";
import "./Color.css";

export default function Color({ id, colorChanged, colorDeleted, newStyle }) {
  return (
    <div
      // onClick={() => colorChanged(id)}
      onMouseOver={() => colorDeleted(id)}
      style={{ background: newStyle }}
      className="color"
    ></div>
  );
}
