import React from "react";
import styles from "./Comp.TabRow.module.css";

const CompTabRow = () => {
  return (
    <article className={styles.CompTabRowContainer}>
      <aside className={styles.DateDetails}>
        <p className={styles.YearDate}>2018-2019</p>
        <p className={styles.WorkTitle}>Junior Frontend Developer</p>
        <p className={styles.CompanyName}>ROC.PH</p>
      </aside>
      <aside className={styles.MoreDetails}>
        <ul className="tree-view">
          <details open>
            <summary className={styles.DetailsTitle}>
              Front-end web development
            </summary>
            <ul>
              <li>Reworked previous webpage design and added animations.</li>
            </ul>
          </details>
          <details open>
            <summary className={styles.DetailsTitle}>Migration</summary>
            <ul>
              <li>Migrated front-end design from Bootstrap V2 to V3.</li>
            </ul>
          </details>
          <details open>
            <summary className={styles.DetailsTitle}>Encoding data</summary>
            <ul>
              <li>Managed and sorted data.</li>
            </ul>
          </details>
        </ul>
      </aside>
    </article>
  );
};

export default CompTabRow;

/*
    if (ImageContainer) {
        loop through
        - flex wrap
        - limit
        - onlick (pop up)
        - image popup(use the card)
    } else  return
*/
