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

/*
UserRequestApplicationModel.cs
UserRequestPaginationModel.cs
UserRequestResponseModel.cs
ProjectFFCDetails.cs

ProjectFFCDetailsUI.cs
CheckStatusResponseModel.cs
CheckStatusApplicationModel.cs
UnauthorizedData.cs

RequestAcceptedModel
RequestDeclinedModel
UserRequestModel

RequestAcceptedTemplate.cshtml
RequestDeclinedTemplate.cshtml
UserRequestTemplate.cshtml
*/
