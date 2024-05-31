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
  status1?: String;
  status2?: String;
}

const ReusablesPopCardConstruction = ({
  title,
  btnText,
  imgPath,
  imgHeight,
  imgWidth,
  message,
  status1,
  status2,
}: ReusablesPopCardConstructionType) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);
  const { usage } = HooksUsage();

  const handleToggle = () => setToggle(!toggle);
  const handleToggleFullscreen = () => setToggleFullscreen(!toggleFullscreen);
  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 300);
  };

  return (
    <>
      <button onClick={handleToggle}>{btnText}</button>

      {toggle && (
        <section
          className={styles.ReusablesPopCardConstructionContainer}
          onClick={handleShake}
        >
          <div
            className={`${styles.PopCardConstructionBtnWindow} window ${
              toggleFullscreen && styles.WindowFullScreen
            }`}
          >
            <div className={`title-bar ${shake && "inactive"}`}>
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
                  draggable="false"
                  className={
                    toggleFullscreen ? styles.WindowImageFullscreen : ""
                  }
                  unoptimized
                />
                <p>
                  {message ||
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam cumque fuga consequatur eveniet debitis aperiam, eaque in reprehenderit beatae magnam?"}
                </p>
              </center>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">
                {status1 || "C:\\User\\Jacob"}{" "}
              </p>
              <p className="status-bar-field">{status2 || "Works"} </p>
              <p className="status-bar-field">CPU Usage: {String(usage)}%</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ReusablesPopCardConstruction;
