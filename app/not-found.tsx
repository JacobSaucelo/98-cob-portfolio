import React from "react";
import styles from "./page.not-found.module.css";
import EssentialsFooter from "@/components/essentials/Essentials.Footer";
import EssentialsNavbar from "@/components/essentials/Essentials.Navbar";
import SectionNotFound from "@/components/sections/NotFound/Section.NotFound";

const NotFoundPage = () => {
  return (
    <main className={styles.PageNotFoundContainer}>
      {/* <EssentialsNavbar /> */}
      <SectionNotFound />
      <EssentialsFooter />
    </main>
  );
};

export default NotFoundPage;
