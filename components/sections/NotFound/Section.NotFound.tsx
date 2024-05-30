"use client";

import React, { useState } from "react";
import styles from "./Section.NotFound.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SectionNotFound = () => {
  const [imageSelected, setImageSelected] = useState<String>("");
  const currentPathName = usePathname();

  //   OO any kase tamad ako lol
  const handleImageSelect = (e: any) => {
    setImageSelected(e.target.value);
  };

  return (
    <section className={styles.SectionNotFoundContainer}>
      <div className={`${styles.SectionWindow} window`}>
        <div className={`${styles.WindowTitleBar} title-bar`}>
          <div className="title-bar-text">Error 404 - Page Not Found...</div>
          <div className="title-bar-controls"></div>
        </div>
        <div className={`${styles.WindowBody} window-body`}>
          <aside className={styles.WindowBodyImageContainer}>
            {imageSelected === "C:\\Cat.000" ? (
              <Image
                src="/assets/notFound.jpg"
                height={260}
                width={120}
                alt="Page not found"
                className={styles.WindowBodyImage}
              />
            ) : (
              <Image
                src="/assets/notFoundBannerFixed.png"
                height={260}
                width={120}
                alt="Page not found"
                className={styles.WindowBodyImage}
                priority
              />
            )}
          </aside>
          <aside className={styles.WindowBodyDetails}>
            <div className={styles.WindowBodyTexts}>
              <p className={styles.WindowBodyHeader1}>Error - 404</p>
              <p className={styles.WindowBodyHeader2}>Page Not Found... </p>
              <div className={styles.WindowBodyPathTexts}>
                <p className={styles.WindowBodyPathName}>
                  C:/Pages{currentPathName}
                </p>{" "}
                is not accessible{" "}
              </div>
              <p>The file or directory is corrupted and unreadable </p>
              <fieldset onChange={(e) => handleImageSelect(e)}>
                <legend>Select a directory</legend>
                <div className="field-row">
                  <input
                    id="radio13"
                    type="radio"
                    name="fieldset-example2"
                    value="C:\\JACOB.000"
                  />
                  <label htmlFor="radio13">C:\\JACOB.000</label>
                </div>
                <div className="field-row">
                  <input
                    id="radio14"
                    type="radio"
                    name="fieldset-example2"
                    value={String("C:\\Cat.000")}
                  />
                  <label htmlFor="radio14">C:\\Cat.000</label>
                </div>
                <div className="field-row">
                  <input
                    id="radio16"
                    type="radio"
                    name="fieldset-example2"
                    value="other"
                  />
                  <label htmlFor="radio16">Other directory</label>
                </div>
              </fieldset>
            </div>
            <hr />
            <div className={styles.WindowBodyButtons}>
              <aside>
                <button disabled>Finish</button>
                <button>Home</button>
              </aside>
              <button>Cancel</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SectionNotFound;
