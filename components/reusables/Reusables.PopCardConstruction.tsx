"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCardConstruction.module.css";
import { HooksUsage } from "@/hooks/Hooks.Usage";
import Image from "next/image";

interface ReusablesPopCardConstructionType {
  title: String;
  btnText: String;
  message: String;
  imgPath: String;
  imgHeight: Number;
  imgWidth: Number;
}

const ReusablesPopCardConstruction = ({
  title,
  btnText,
  imgPath,
  imgHeight,
  imgWidth,
  message,
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
            className={`${styles.PopCardConstructionBtnWindow} window ${
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
            <div
              className={`${styles.PopCardConstructionBtnWindowBody} window-body`}
            >
              <center>
                <Image
                  src={String(imgPath)}
                  height={Number(imgHeight)}
                  width={Number(imgWidth)}
                  alt={String(title)}
                />
                <p>
                  {message ||
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam cumque fuga consequatur eveniet debitis aperiam, eaque in reprehenderit beatae magnam?"}
                </p>
              </center>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">C:\User\Jacob</p>
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
