import Image from "next/image";
import React from "react";
import styles from "./Section.Contact.module.css";
import ReusablesPopCard from "@/components/reusables/Reusables.PopCard";

const SectionContact = () => {
  return (
    <section className={styles.SectionContactContainer}>
      <div className={`${styles.ContactImage} window`}>
        <div className="title-bar">
          <div className="title-bar-text">Penguin Dancing</div>
          <div className="title-bar-controls">
            <button aria-label="Maximize"></button>
          </div>
        </div>
        <div className={`${styles.ContactImagePenguin} window-body`}>
          {/* <Image src="/music1.gif" width={100} height={100} alt="music gif" /> */}
          <Image
            src="/clubpenguin.gif"
            width={100}
            height={100}
            alt="music gif"
          />
        </div>
        <div className="status-bar">
          <p className="status-bar-field">Press w for help</p>
          <p className="status-bar-field">Slide 2</p>
          <p className="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>

      <div className={`${styles.ContactDetails} window-body`}>
        <menu role="tablist">
          <li role="tab" aria-selected="true">
            <a href="#tabs">Chat 💬💬💬</a>
          </li>
        </menu>
        <div className="window" role="tabpanel">
          <div className="window-body">
            <ul className="tree-view">
              <li>
                <strong className={styles.ChatTitle}>🤙 Socials </strong>
              </li>
              <li>
                <span className={styles.ChatJacob}>Jacob:</span> Yo!!!
              </li>
              <li>
                <span className={styles.ChatJacob}>Jacob:</span> Here are my
                links and socials if you wanna see more of my works!
              </li>
              <li>
                <span className={styles.ChatJacob}>Jacob:</span>{" "}
                <button>
                  <div className="status-bar">
                    <p className="status-bar-field">Github</p>
                    <p className="status-bar-field">
                      <Image
                        height={12}
                        width={12}
                        src="/githubIcon.png"
                        alt="github icon"
                      />
                    </p>
                  </div>
                </button>
                <button>
                  <div className="status-bar">
                    <p className="status-bar-field">Linked In</p>
                    <p className="status-bar-field">
                      <Image
                        height={12}
                        width={12}
                        src="/linkedInIcon.png"
                        alt="LinkedIn icon"
                      />
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <article className={styles.ContactInputSection}>
            <select>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Teal</option>
              <option>Black</option>
            </select>
            <input
              id="text17"
              type="text"
              value="NAHHH no lol 😭💀"
              className={styles.ContactInputMessage}
              readOnly
            />
            <ReusablesPopCard
              buttonTitle="Send"
              title="Network Error..."
              content="Network Error ⚠️ Unable to send message at this time."
              defaultValue={true}
            />
            {/* <button>Send</button> */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;

//   <aside>
//     <h5>Contacts</h5>
//     <p>Here are my links and socials if you wanna see more of my works.</p>
//     {/* github */}
//     <button>
//       <div className="status-bar">
//         <p className="status-bar-field">Github</p>
//         <p className="status-bar-field">
//           <Image
//             height={12}
//             width={12}
//             src="/githubIcon.png"
//             alt="github icon"
//           />
//         </p>
//       </div>
//     </button>
//   </aside>
