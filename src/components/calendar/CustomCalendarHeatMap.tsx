import MonthLabel from "./MonthLabel";
import React from "react";
import WeekLabel from "./WeekLabel";

interface CustomCalendarHeatmapProps {
  children: React.ReactNode;
}
const CustomCalendarHeatmap = ({ children }: CustomCalendarHeatmapProps) => {
  return <div>{children}</div>;
};

CustomCalendarHeatmap.Month = <MonthLabel />;
CustomCalendarHeatmap.Week = <WeekLabel />;

export default CustomCalendarHeatmap;
