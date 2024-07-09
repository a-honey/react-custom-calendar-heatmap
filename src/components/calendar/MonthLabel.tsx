import Months from "../../constants/Months";
import React from "react";

interface MonthLabelProps {
  style?: React.CSSProperties;
  type?: keyof typeof Months;
}

const MonthLabel = ({ type = "enShort" }: MonthLabelProps) => {
  return (
    <div className="month-container">
      {Months[type].map((month) => (
        <div key={month} className="month-element">
          {month}
        </div>
      ))}
    </div>
  );
};

export default MonthLabel;
