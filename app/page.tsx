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
delorean
https://sketchfab.com/3d-models/delorean-low-poly-14a40a54a3e245e7852fd4d22261a73a
red:
https://sketchfab.com/3d-models/low-poly-car-pixel-art-textures-lambo-style-5d865f075ac6466ebe8f7944b8c854b5
threejs:
https://threejs.org/examples/#webgl_postprocessing_pixel

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
