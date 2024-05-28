import EssentialsNavbar from "@/components/Essentials.Navbar";
import styles from "./page.module.css";
import SectionTechStack from "@/components/sections/TechStackSection/Section.TechStack";
import SectionExperience from "@/components/sections/Experience/Section.Experience";

export default function Home() {
  return (
    <main className={styles.HomePageContainer}>
      <EssentialsNavbar />
      <SectionTechStack />
      <SectionExperience />
    </main>
  );
}
