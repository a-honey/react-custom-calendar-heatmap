import Months from "../../constants/Months";
import React from "react";

interface MonthLabelProps {
  style?: React.CSSProperties;
  type?: keyof typeof Months;
}

const MonthLabel = ({ type = "enShort" }: MonthLabelProps) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
      {Months[type].map((month) => (
        <div key={month}>{month}</div>
      ))}
    </div>
  );
};

export default MonthLabel;
