"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCard.module.css";

interface ReusablesPopCardType {
  buttonTitle?: String;
  title?: String;
  content?: String;
  defaultValue: boolean;
}

const ReusablesPopCard = ({
  buttonTitle,
  title,
  content,
  defaultValue,
}: ReusablesPopCardType) => {
  const [toggle, setToggle] = useState<boolean>(defaultValue);
  const [shake, setShake] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 300);
  };

  return (
    <section className={styles.PopCardContainer} onClick={handleShake}>
      <button onClick={handleToggle}>{buttonTitle}</button>

      {toggle && (
        <article className={styles.PopUpWindowContainer}>
          <div className={`${styles.PopUpWindow} window`}>
            <div className={`title-bar ${shake && "inactive"}`}>
              <div className="title-bar-text">{title || "Window Title"}</div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={handleToggle}></button>
              </div>
            </div>
            <div className="window-body">
              <p>{content || "Window Content"}</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default ReusablesPopCard;
