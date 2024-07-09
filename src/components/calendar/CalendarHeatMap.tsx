import Container from "./Container";
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
  depth,
  gap = 2,
  SvgComponent,
  monthType,
  weekType,
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
    <Container
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "auto 1fr",
        maxWidth: `${Math.ceil(365 / 7) * (25 + gap)}px`,
      }}
    >
      <div />
      <MonthLabel style={{ gridRow: "0", gridColumn: "1" }} type={monthType} />
      <WeekLabel style={{ gridRow: "1", gridColumn: "0" }} type={weekType} />
      <Heatmap
        style={{ gridRow: "1", gridColumn: "1" }}
        row={7}
        values={heatmapValues}
        SvgComponent={SvgComponent}
        depth={depth}
        gap={gap}
      />
    </Container>
  );
};

export default CalendarHeatmap;
