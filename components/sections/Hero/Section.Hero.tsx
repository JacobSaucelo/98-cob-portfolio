"use client";

import React, { useState } from "react";
import styles from "./Section.Hero.module.css";
import Image from "next/image";

const SectionHero = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFullscreen, setToggleFullscreen] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const handleToggleFullscreen = () => setToggleFullscreen(!toggleFullscreen);
  const handleShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 300);
  };

  return (
    <div className={`${styles.SectionHeroContainer} window`}>
      <div className={`${styles.SectionHeroContainerBody} window-body`}>
        <aside>
          <div className={`${styles.SectionHeroWindow} window `}>
            <div className="title-bar">
              <div className="title-bar-text">User profile</div>
              <div className="title-bar-controls">
                <button aria-label="Maximize" onClick={handleToggle}></button>
              </div>
            </div>
            <div className={`${styles.SectionWindowBody} window-body`}>
              <Image
                src="/logos/javascript.png"
                height={50}
                width={50}
                alt="User Image"
                className={styles.SectionHeroWindowImage}
                draggable="false"
              />
            </div>
            <div className="status-bar">
              <p className="status-bar-field">C:\User\Pictures</p>
              <p className="status-bar-field">User.jpeg</p>
            </div>
          </div>
        </aside>
        <aside className={styles.SectionHeroDetails}>
          <p className={styles.SectionHeroDetailsHeader}>
            Lorem ipsum dolor sit.
          </p>
          <p className={styles.SectionHeroDetailsSubTitle}>the tab content</p>
        </aside>
      </div>

      {toggle && (
        <section className={styles.HeroPopUpContainer} onClick={handleShake}>
          <div
            className={`${styles.HeroPopUpWindow} window ${
              toggleFullscreen && styles.WindowFullScreen
            }`}
          >
            <div className={`title-bar ${shake && "inactive"}`}>
              <div className="title-bar-text">User profile</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" onClick={handleToggle}></button>
                <button
                  aria-label="Maximize"
                  onClick={handleToggleFullscreen}
                ></button>
                <button aria-label="Close" onClick={handleToggle}></button>
              </div>
            </div>
            <div className={`${styles.HeroPopUpBody} window-body`}>
              <center>
                <Image
                  src="/logos/javascript.png"
                  height={100}
                  width={100}
                  alt="User Image"
                  className={styles.HeroPopUpImage}
                  draggable="false"
                />
                <p>User.png</p>
              </center>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">C:\User\Pictures</p>
              <p className="status-bar-field">User.jpeg</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SectionHero;
