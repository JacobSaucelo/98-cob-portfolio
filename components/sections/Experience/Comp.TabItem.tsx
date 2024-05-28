import { DataWorkExpTypes } from "@/data/Data.WorkExperience";
import CompTabRow from "./Comp.TabRow";

interface CompTabItem {
  value: String;
  data: DataWorkExpTypes[];
}

const CompTabItem = ({ value, data }: CompTabItem) => {
  return (
    <div className="window-body">
      <center>
        <h3>{value}</h3>
      </center>
      <hr />
      {data.map((details) => (
        <CompTabRow data={details} key={details.year} />
      ))}
    </div>
  );
};

export default CompTabItem;
