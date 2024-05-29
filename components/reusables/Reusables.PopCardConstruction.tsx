"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCardConstruction.module.css";
import { HooksUsage } from "@/hooks/Hooks.Usage";

interface ReusablesPopCardConstructionType {
  title: String;
  btnText: String;
}

const ReusablesPopCardConstruction = ({
  title,
  btnText,
}: ReusablesPopCardConstructionType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(false);
  const { usage } = HooksUsage();

  const handleToggle = () => setToggle(!toggle);
  const handleToggleFullscreen = () => setToggleFullscreen(!toggleFullscreen);

  return (
    <>
      <button onClick={handleToggle}>{btnText}</button>

      {toggle && (
        <section className={styles.ReusablesPopCardConstructionContainer}>
          <div
            className={`${styles.PopCardNoBtnWindow} window ${
              toggleFullscreen && styles.WindowFullScreen
            }`}
          >
            <div className="title-bar">
              <div className="title-bar-text">{title}</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" onClick={handleToggle}></button>
                <button
                  aria-label="Maximize"
                  onClick={handleToggleFullscreen}
                ></button>
                <button aria-label="Close" onClick={handleToggle}></button>
              </div>
            </div>
            <div className="window-body">
              <p>There&apos;s so much room for activities!</p>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">C:\Jacob\</p>
              <p className="status-bar-field">Works</p>
              <p className="status-bar-field">CPU Usage: {String(usage)}%</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ReusablesPopCardConstruction;
