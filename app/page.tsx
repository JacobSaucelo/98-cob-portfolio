import EssentialsNavbar from "@/components/essentials/Essentials.Navbar";
import styles from "./page.module.css";
import SectionTechStack from "@/components/sections/TechStackSection/Section.TechStack";
import SectionExperience from "@/components/sections/Experience/Section.Experience";
import ReusablesPopCard from "@/components/reusables/Reusables.PopCard";
import EssentialsFooter from "@/components/essentials/Essentials.Footer";
import SectionContact from "@/components/sections/Contact/Section.Contact";

export default function Home() {
  return (
    <main className={styles.HomePageContainer}>
      {/* <ReusablesPopCard /> */}
      <EssentialsNavbar />
      <SectionTechStack />
      <SectionExperience />
      <SectionContact />
      <EssentialsFooter />
    </main>
  );
}
