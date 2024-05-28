import React from "react";
import styles from "./Comp.About.module.css";
const CompAbout = () => {
  return (
    <div className={`${styles.CompAboutContainer} window`}>
      <div className="title-bar">
        <div className="title-bar-text">Skills - My Web Dev Stack</div>
      </div>
      <div className="window-body">
        <p> There are just so many possibilities:</p>
        <ul>
          <li>A Task Manager</li>
          <li>A Notepad</li>
          <li>Or even a File Explorer!</li>
        </ul>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">Press q for help</p>
        <p className="status-bar-field">Slide 1</p>
        <p className="status-bar-field">CPU Usage: 14%</p>
      </div>
    </div>
  );
};

export default CompAbout;
