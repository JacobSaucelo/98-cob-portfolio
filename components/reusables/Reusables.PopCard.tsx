"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCard.module.css";

interface ReusablesPopCardType {
  title: String;
  content: String;
}

const ReusablesPopCard = ({ title, content }: ReusablesPopCardType) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [shake, setShake] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 250);
  };

  return (
    <section className={styles.PopCardContainer} onClick={handleShake}>
      <button onClick={handleToggle}>Toggle</button>

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
