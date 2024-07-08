import Container from "./Container";
import HeatMap from "../../components/common/HeatMap";
import { HeatMapProps } from "types";
import MonthLabel from "./MonthLabel";
import Months from "../../constants/Months";
import React from "react";
import WeekLabel from "./WeekLabel";
import Weeks from "../../constants/Weeks";

interface CalendarHeatMapElementProps {
  date: Date;
  value: number;
}

export interface CalendarHeatMapProps extends HeatMapProps {
  values: CalendarHeatMapElementProps[];
  monthType?: keyof typeof Months;
  weekType?: keyof typeof Weeks;
}

const CalendarHeatMap = ({
  values,
  depth,
  gap = 2,
  SvgComponent,
  monthType,
  weekType,
}: CalendarHeatMapProps) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const heatMapValues = Array.from({ length: 365 }, (_, index) => {
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
      <HeatMap
        style={{ gridRow: "1", gridColumn: "1" }}
        row={7}
        values={heatMapValues}
        SvgComponent={SvgComponent}
        depth={depth}
        gap={gap}
      />
    </Container>
  );
};

export default CalendarHeatMap;
