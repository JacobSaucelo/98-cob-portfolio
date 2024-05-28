import EssentialsNavbar from "@/components/Essentials.Navbar";
import styles from "./page.module.css";
import SectionTechStack from "@/components/sections/Section.TechStack";

export default function Home() {
  return (
    <main className={styles.HomePageContainer}>
      <EssentialsNavbar />
      <SectionTechStack />
    </main>
  );
}
