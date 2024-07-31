import "../styles/globals.css";

import CalendarHeatmap, {
  CalendarHeatmapProps,
} from "../components/calendar/CalendarHeatmap";

import CircleSvg from "./assets/CircleSvg";
import CloverSvg from "./assets/CloverSvg";
import React from "react";
import { getCalendarValues } from "../utils/demo.utils";

export default {
  title: "CalendarHeatmap",
  component: CalendarHeatmap,
};

const Template: React.FC<
  { SvgComponent?: React.ComponentType } & CalendarHeatmapProps
> = ({ SvgComponent, values, ...props }) => {
  return (
    <div style={{ width: "900px" }}>
      <CalendarHeatmap {...props} values={values} SvgComponent={SvgComponent} />
    </div>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  values: getCalendarValues(),
};

export const WithCloverSvg: any = Template.bind({});
WithCloverSvg.args = {
  values: getCalendarValues(),
  SvgComponent: CloverSvg,
  mainColor: "#000000",
  size: 20,
};

export const WithCircleSvg: any = Template.bind({});
WithCircleSvg.args = {
  values: getCalendarValues(),
  SvgComponent: CircleSvg,
  mainColor: "#FF7A35",
  size: 10,
};

export const WithCircleSvgAndHover: any = Template.bind({});
WithCircleSvgAndHover.args = {
  values: getCalendarValues(),
  SvgComponent: CircleSvg,
  mainColor: "#FF7A35",
  size: 15,
  HoverComponent: "hi",
};

export const WithColorSet: any = Template.bind({});
WithColorSet.args = {
  values: [
    {
      value: 60,
      date: new Date("2024-07-26"),
    },
    {
      value: 40,
      date: new Date("2024-07-27"),
    },
    {
      value: 30,
      date: new Date("2024-07-28"),
    },
    {
      value: 20,
      date: new Date("2024-07-29"),
    },
    {
      value: 1,
      date: new Date("2024-07-30"),
    },
    {
      value: 0,
      date: new Date("2024-07-31"),
    },
    {
      value: 70,
      date: new Date("2024-08-01"),
    },
  ],
  SvgComponent: CircleSvg,
  depth: 4,
  colorSet: ["#E0E7EE", "#17990b", "#ffd000", "#ff7300", "#ff0000"],
  size: 15,
};
