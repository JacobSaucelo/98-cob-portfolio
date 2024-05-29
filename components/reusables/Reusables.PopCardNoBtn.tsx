"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCardNoBtn.module.css";
import { HooksUsage } from "@/hooks/Hooks.Usage";

interface ReusablesPopCardNoBtnType {
  containerTitle: String;
  content: String;
  imgPath: String;
  name: String;
}
const ReusablesPopCardNoBtn = ({
  containerTitle,
  content,
  imgPath,
  name,
}: ReusablesPopCardNoBtnType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(false);
  const { usage } = HooksUsage();

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
                  <div className="title-bar-text">{containerTitle}</div>
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
                  <p className="status-bar-field">C:\Jacob\Tech Stack</p>
                  <p className="status-bar-field">{content}</p>
                  <p className="status-bar-field">
                    CPU Usage: {String(usage)}%
                  </p>
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
