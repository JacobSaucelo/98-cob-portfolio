"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCardNoBtn.module.css";
import { HooksUsage } from "@/hooks/Hooks.Usage";
import Image from "next/image";

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
          <p className={styles.PupupTableSpan} onClick={handleToggle}>
            {content || "content"}
          </p>

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
                <div className={`${styles.PopCardWindowBody} window-body`}>
                  <aside>
                    <Image
                      src={imgPath.toString()}
                      height={40}
                      width={40}
                      alt={name.toString()}
                      className={styles.PopCardImg}
                    />
                    <center>
                      <p>{name}.png</p>
                    </center>
                  </aside>
                  <h3>{content}</h3>
                </div>
                <div className="status-bar">
                  <p className="status-bar-field">C:\User\Jacob\Tech Stack</p>
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
