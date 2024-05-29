import React from "react";
import styles from "./Reusables.PopCardConstruction.module.css";

interface ReusablesPopCardConstructionType {
  title: String;
  btnText: String;
}

const ReusablesPopCardConstruction = ({
  title,
  btnText,
}: ReusablesPopCardConstructionType) => {
  return (
    <>
      <button>{btnText}</button>

      <section>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>There&apos;s so much room for activities!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReusablesPopCardConstruction;
