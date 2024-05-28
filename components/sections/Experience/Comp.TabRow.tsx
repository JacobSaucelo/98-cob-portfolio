import React from "react";
import styles from "./Comp.TabRow.module.css";
import { DataWorkExpTypes } from "@/data/Data.WorkExperience";

interface CompTabRowType {
  data: DataWorkExpTypes;
}

const CompTabRow = ({ data }: CompTabRowType) => {
  return (
    <article className={styles.CompTabRowContainer}>
      <aside className={styles.DateDetails}>
        <p className={styles.YearDate}>{data.year}</p>
        <p className={styles.WorkTitle}>{data.position}</p>
        <p className={styles.CompanyName}>{data.company}</p>
      </aside>
      <aside className={styles.MoreDetails}>
        <ul className="tree-view">
          {data.details.map((details) => (
            <details open key={details.detailsTitle}>
              <summary className={styles.DetailsTitle}>
                {details.detailsTitle}
              </summary>
              <ul>
                <li>{details.desc}</li>
              </ul>
            </details>
          ))}
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
