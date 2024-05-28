"use client";

import React, { useState } from "react";
import styles from "./Reusables.PopCard.module.css";

const ReusablesPopCard = () => {
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
              <div className="title-bar-text">A Window With Stuff In It</div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={handleToggle}></button>
              </div>
            </div>
            <div className="window-body">
              <p>There&apos;s so much room for activities!</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default ReusablesPopCard;
