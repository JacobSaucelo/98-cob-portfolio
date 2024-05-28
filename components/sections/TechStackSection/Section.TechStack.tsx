import React from "react";
import CompAbout from "./Comp.About";
import styles from "./Section.TechStack.module.css";
import CompTechStack from "./Comp.TechStack";
const SectionTechStack = () => {
  return (
    <section className={styles.TechStackContainer}>
      <CompAbout />
      <CompTechStack />
    </section>
  );
};

export default SectionTechStack;
