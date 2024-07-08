import React from "react";
import Weeks from "../../constants/Weeks";

interface WeekLabelProps {
  style?: React.CSSProperties;
  type?: keyof typeof Weeks;
}

const WeekLabel = ({ type = "enShort" }: WeekLabelProps) => {
  return (
    <div style={{ display: "grid", gridTemplateRows: "repeat(7, 1fr)" }}>
      {Weeks[type].map((week) => (
        <div key={week}>{week}</div>
      ))}
    </div>
  );
};

export default WeekLabel;
