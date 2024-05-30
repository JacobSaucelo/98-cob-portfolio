import React from "react";
import styles from "./Section.NotFound.module.css";
import Image from "next/image";

const SectionNotFound = () => {
  return (
    <section className={styles.SectionNotFoundContainer}>
      <div className={`${styles.SectionWindow} window`}>
        <div className={`${styles.WindowTitleBar} title-bar`}>
          {/* style={{ backgroundColor: "rgba(0,0,168,1) !important" }} */}
          <div className="title-bar-text">Page Not Found</div>
          <div className="title-bar-controls"></div>
        </div>
        <div className={`${styles.WindowBody} window-body`}>
          <aside className={styles.WindowBodyImageContainer}>
            <Image
              src="/assets/notFoundBannerFixed.png"
              height={260}
              width={120}
              alt="Page not found"
              className={styles.WindowBodyImage}
            />
          </aside>
          <aside>
            <p>Page Not Found : (</p>
            <p>There&apos;s so much room for activities!</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SectionNotFound;
