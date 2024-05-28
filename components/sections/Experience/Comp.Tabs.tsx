"use client";

import { useState } from "react";
import CompTabItem from "./Comp.TabItem";
import styles from "./Comp.Tabs.module.css";

const CompTabs = () => {
  const [data, setData] = useState([
    {
      id: 1,
      isSelected: true,
      value: "💎 Experience",
    },
    {
      id: 2,
      isSelected: false,
      value: "🎓 Education",
    },
  ]);

  const handleSelected = (currentId) => {
    const updatedData = data.map((tab) => {
      if (tab.id == currentId) {
        return { ...tab, isSelected: true };
      }
      return { ...tab, isSelected: false };
    });

    setData(updatedData);
  };

  return (
    <article className={styles.TabsContainer}>
      <menu role="tablist">
        {data.map((tab) => (
          <li
            role="tab"
            aria-selected={tab.isSelected}
            key={tab.id}
            onClick={() => handleSelected(tab.id)}
          >
            <div className={styles.TabHeaderTitle}>{tab.value}</div>
          </li>
        ))}
      </menu>
      <div className="window" role="tabpanel">
        {data.map((content) => {
          if (content.isSelected) {
            return <CompTabItem key={content.id} value={content.value} />;
          }
        })}
      </div>
    </article>
  );
};

export default CompTabs;
