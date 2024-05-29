import React from "react";
import styles from "./Section.Hero.module.css";
import Image from "next/image";

const SectionHero = () => {
  return (
    <div role="tabpanel" className={`${styles.SectionHeroContainer} window`}>
      <div className={`${styles.SectionHeroContainerBody} window-body`}>
        <aside>
          <div className={`${styles.SectionHeroWindow} window`}>
            <div className="title-bar">
              <div className="title-bar-text">User profile</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className={`${styles.SectionWindowBody} window-body`}>
              <Image
                src="/logos/javascript.png"
                height={50}
                width={50}
                alt="User Image"
                className={styles.SectionHeroWindowImage}
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

      <section>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">A Window With Stuff In It</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>There&apos;s so much room for activities!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
