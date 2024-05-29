import Image from "next/image";
import styles from "./Essentials.Navbar.module.css";
import ReusablesPopCardConstruction from "../reusables/Reusables.PopCardConstruction";

const EssentialsNavbar = () => {
  return (
    <nav className={styles.NavbarContainer}>
      <label htmlFor="headerTitle" className={styles.HeaderTitle}>
        Header title
      </label>
      <aside className={styles.NavbarActions}>
        <ReusablesPopCardConstruction btnText="Works" title="Works" />
        <button>Works</button>
        <button>
          <div className="status-bar">
            <p className="status-bar-field">Github</p>
            <p className="status-bar-field">
              <Image
                height={12}
                width={12}
                src="/githubIcon.png"
                alt="github icon"
                priority
              />
            </p>
          </div>
        </button>
      </aside>
    </nav>
  );
};

export default EssentialsNavbar;
