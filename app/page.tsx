import EssentialsNavbar from "@/components/Essentials.Navbar";
import styles from "./page.module.css";
import SectionTechStack from "@/components/sections/TechStackSection/Section.TechStack";
import SectionExperience from "@/components/sections/Experience/Section.Experience";
import ReusablesPopCard from "@/components/reusables/Reusables.PopCard";

export default function Home() {
  return (
    <main className={styles.HomePageContainer}>
      <ReusablesPopCard />
      {/* <EssentialsNavbar />
      <SectionTechStack />
      <SectionExperience /> */}
    </main>
  );
}
