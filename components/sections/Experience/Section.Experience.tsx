import React from "react";
import CompTabs from "./Comp.Tabs";
import styles from "./Section.Experience.module.css";

const SectionExperience = () => {
  return (
    <section className={styles.SectionExperienceContainer}>
      <CompTabs />
    </section>
  );
};

export default SectionExperience;
