import React from "react";
import {
  DataFrontEnd,
  DataBackEnd,
  DataDatabases,
} from "@/data/Data.TechStack";
import styles from "./Comp.TechStack.module.css";

const CompTechStack = () => {
  return (
    <div className={`${styles.TechStackContainer} sunken-panel`}>
      <table>
        <thead>
          <tr>
            <th>🖥️ Front End</th>
          </tr>
        </thead>
        <tbody>
          {DataFrontEnd.map((stack) => (
            <tr key={stack.name}>
              <td>{stack.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>🛠️ Back End</th>
          </tr>
        </thead>
        <tbody>
          {DataBackEnd.map((stack) => (
            <tr key={stack.name}>
              <td>{stack.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>🗃️ Database</th>
          </tr>
        </thead>
        <tbody>
          {DataDatabases.map((stack) => (
            <tr key={stack.name}>
              <td>{stack.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompTechStack;
// <ul className={`${styles.TechStackContainer} tree-view`}>
//   <li className={styles.TechStackItem}>Table of Contents</li>
//   <li>
//     <details open>
//       <summary className={styles.TechStackLiHeader}>Front End 🖥️</summary>
//       <ul>
//         {DataFrontEnd.map((stack) => (
//           <li key={stack.name}>{stack.content}</li>
//         ))}
//       </ul>
//     </details>
//   </li>
//   <li>
//     <details open>
//       <summary className={styles.TechStackLiHeader}>Back End 🛠️</summary>
//       <ul>
//         {DataBackEnd.map((stack) => (
//           <li key={stack.name}>{stack.content}</li>
//         ))}
//       </ul>
//     </details>
//   </li>
//   <li>
//     <details open>
//       <summary className={styles.TechStackLiHeader}>Database 🗃️</summary>
//       <ul>
//         {DataDatabases.map((stack) => (
//           <li key={stack.name}>{stack.content}</li>
//         ))}
//       </ul>
//     </details>
//   </li>
// </ul>

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
