import React from "react";

const CompTechStack = () => {
  return (
    <ul className="tree-view">
      <li>Table of Contents</li>
      <li>What is web development?</li>
      <li>
        CSS
        <ul>
          <li>Selectors</li>
          <li>Specificity</li>
          <li>Properties</li>
        </ul>
      </li>
      <li>
        <details open>
          <summary>JavaScript</summary>
          <ul>
            <li>Avoid at all costs</li>
            <li>
              <details>
                <summary>Unless</summary>
                <ul>
                  <li>Avoid</li>
                  <li>
                    <details>
                      <summary>At</summary>
                      <ul>
                        <li>Avoid</li>
                        <li>At</li>
                        <li>All</li>
                        <li>Cost</li>
                      </ul>
                    </details>
                  </li>
                  <li>All</li>
                  <li>Cost</li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>HTML</li>
      <li>Special Thanks</li>
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
