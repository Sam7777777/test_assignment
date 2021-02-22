import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div className="Layout">
      <div id="Toolbar">
        <ul className="Items">
          <li>
            <Link to="/">Форма</Link>
          </li>
          <li>
            <Link to="/palette">Палитра</Link>
          </li>
        </ul>
      </div>
      <main className="Content">{props.children}</main>
    </div>
  );
}
