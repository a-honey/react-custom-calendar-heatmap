import React from "react";
import Weeks from "../../constants/Weeks";

interface WeekLabelProps {
  style?: React.CSSProperties;
  type?: keyof typeof Weeks;
}

const WeekLabel = ({ type = "enShort" }: WeekLabelProps) => {
  return (
    <div className="week-container">
      {Weeks[type].map((week) => (
        <div key={week} className="week-element">
          {week}
        </div>
      ))}
    </div>
  );
};

export default WeekLabel;
