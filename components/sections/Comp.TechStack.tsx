import React from "react";
import {
  DataFrontEnd,
  DataBackEnd,
  DataDatabases,
} from "@/data/Data.TechStack";
import styles from "./Comp.TechStack.module.css";

const CompTechStack = () => {
  return (
    <ul className="tree-view">
      <li className={styles.TechStackItem}>Table of Contents</li>
      <li>
        <details open>
          <summary className={styles.TechStackLiHeader}>Front End 🖥️</summary>
          <ul>
            {DataFrontEnd.map((stack) => (
              <li key={stack.name}>{stack.content}</li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary className={styles.TechStackLiHeader}>Back End 🛠️</summary>
          <ul>
            {DataBackEnd.map((stack) => (
              <li key={stack.name}>{stack.content}</li>
            ))}
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary className={styles.TechStackLiHeader}>Database 🗃️</summary>
          <ul>
            {DataDatabases.map((stack) => (
              <li key={stack.name}>{stack.content}</li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default CompTechStack;

/*

Frontend
-javascript
-typescript
-html
-css
-sass
-reactjs
-styled components
-bootstrap
-tailwindcss
-chakraUI

backend
-golang
-nodejs
-nextjs
-.net
-php

database
-mysql
-firebase
-mongodb

*/
