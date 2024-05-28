import React from "react";
import styles from "./Comp.About.module.css";
const CompAbout = () => {
  return (
    <div className={`${styles.CompAboutContainer} window`}>
      <div className="title-bar">
        <div className="title-bar-text">Skills - My Web Dev Stack</div>
      </div>
      <div className="window-body">
        <p className={styles.AboutDetailsText}>
          I currently use VueJs & Asp.Net(Core/Non-Core) as my tech stack for my
          current work but but im comfortable on exploring other frontend
          libraries or frameworks based on what the project needs.
        </p>
        <ul>
          <li>Front End</li>
          <li>Back End</li>
          <li>& Database!</li>
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
