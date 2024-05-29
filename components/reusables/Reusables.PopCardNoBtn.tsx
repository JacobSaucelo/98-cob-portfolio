"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCardNoBtn.module.css";

interface ReusablesPopCardNoBtnType {
  content: String;
}
const ReusablesPopCardNoBtn = ({ content }: ReusablesPopCardNoBtnType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const handleToggleFullscreen = () => setToggleFullscreen(!toggleFullscreen);

  return (
    <>
      <tr className={styles.PopupTableRow}>
        <td>
          <span className={styles.PupupTableSpan} onClick={handleToggle}>
            {content || "content"}
          </span>

          {toggle && (
            <div className={styles.PopCardNoBtnContainer}>
              <div
                className={`${styles.PopCardNoBtnWindow} window ${
                  toggleFullscreen && styles.WindowFullScreen
                }`}
              >
                <div className="title-bar">
                  <div className="title-bar-text">
                    A Window With Stuff In It
                  </div>
                  <div className="title-bar-controls">
                    <button
                      aria-label="Minimize"
                      onClick={handleToggle}
                    ></button>
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
                  <p className="status-bar-field">Press F1 for help</p>
                  <p className="status-bar-field">Slide 1</p>
                  <p className="status-bar-field">CPU Usage: 14%</p>
                </div>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default ReusablesPopCardNoBtn;
