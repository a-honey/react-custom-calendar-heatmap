import Heatmap from "../common/Heatmap";
import { HeatmapProps } from "types";
import MonthLabel from "./MonthLabel";
import Months from "../../constants/Months";
import React from "react";
import WeekLabel from "./WeekLabel";
import Weeks from "../../constants/Weeks";

interface CalendarHeatmapElementProps {
  date: Date;
  value: number;
}

export interface CalendarHeatmapProps extends HeatmapProps {
  values: CalendarHeatmapElementProps[];
  monthType?: keyof typeof Months;
  weekType?: keyof typeof Weeks;
}

const CalendarHeatmap = ({
  values,
  SvgComponent,
  HoverComponent,
  monthType,
  weekType,
  ...props
}: CalendarHeatmapProps) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const heatmapValues = Array.from({ length: 365 }, (_, index) => {
    const currentDate = new Date(`${currentYear}-1-1`);
    currentDate.setDate(currentDate.getDate() + index);

    const matchingValue = values.find((item) => {
      const itemDate = new Date(item.date);
      return currentDate.toDateString() === itemDate.toDateString();
    });

    return matchingValue
      ? { hoverValue: currentDate.toString(), value: matchingValue.value }
      : { hoverValue: currentDate.toString(), value: null };
  });

  return (
    <div className="calendar-heatmap-container">
      <div className="calendar-heatmap-empty-element" />
      <MonthLabel type={monthType} />
      <WeekLabel type={weekType} />
      <Heatmap
        HoverComponent={HoverComponent}
        className={".calendar-heatmap"}
        row={7}
        values={heatmapValues}
        SvgComponent={SvgComponent}
        {...props}
      />
    </div>
  );
};

export default CalendarHeatmap;
