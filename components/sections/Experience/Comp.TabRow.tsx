import React from "react";
import styles from "./Comp.TabRow.module.css";
import { DataWorkExpTypes } from "@/data/Data.WorkExperience";
import Image from "next/image";
import ReusablesPopCardConstruction from "@/components/reusables/Reusables.PopCardConstruction";

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
        <ul className="tree-view" style={{ zIndex: "100" }}>
          {data.details.map((details) => (
            <details open key={details.detailsTitle}>
              <summary className={styles.DetailsTitle}>
                {details.detailsTitle}
              </summary>
              <ul>
                <li>{details.desc}</li>
                {details.imgPath && (
                  <details open>
                    <summary>Graduation photos</summary>
                    <ul>
                      {details.imgPath.map((images, index) => (
                        <li
                          key={index + images}
                          className={styles.DetailsImages}
                        >
                          <Image
                            src={images}
                            height={20}
                            width={20}
                            alt={images}
                          />

                          <ReusablesPopCardConstruction
                            title={`Viewing ${images}`}
                            btnText="View"
                            message={images}
                            imgPath={images}
                            imgHeight={200}
                            imgWidth={200}
                            status1="C:\User\Pictures"
                            status2="Graduation photos"
                          />
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
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
