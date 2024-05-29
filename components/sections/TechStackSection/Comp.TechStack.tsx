import {
  DataFrontEnd,
  DataBackEnd,
  DataDatabases,
} from "@/data/Data.TechStack";
import styles from "./Comp.TechStack.module.css";
import Image from "next/image";
import ReusablesPopCardNoBtn from "@/components/reusables/Reusables.PopCardNoBtn";

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
            <ReusablesPopCardNoBtn
              containerTitle="🖥️ Front End"
              imgPath={stack.imgPath}
              name={stack.name}
              content={stack.content}
              key={stack.name}
            />
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
            <ReusablesPopCardNoBtn
              containerTitle="🛠️ Back End"
              imgPath={stack.imgPath}
              name={stack.name}
              content={stack.content}
              key={stack.name}
            />
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
            <ReusablesPopCardNoBtn
              containerTitle="🗃️ Database"
              imgPath={stack.imgPath}
              name={stack.name}
              content={stack.content}
              key={stack.name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompTechStack;
