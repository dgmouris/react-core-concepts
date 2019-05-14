import React from "react";
import "./css/sidebar.css";

const SideBar = props => {
  return (
    <aside className="sidebar">
      <header className="site-identity">
        <h2 className="site-title">{props.title}</h2>
        <p className="site-tagline">{props.tagline}</p>
      </header>
      <div className="sidebar-buttons">
        <ul>
          {props.buttons.map((button, index) => {
            return <li className="sidebar-button">{button.name}</li>;
          })}
        </ul>
      </div>

      <div>
        <div className="card" />
      </div>
    </aside>
  );
};

export default SideBar;
