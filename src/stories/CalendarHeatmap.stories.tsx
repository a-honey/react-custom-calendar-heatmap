import "../styles/globals.css";

import CalendarHeatmap, {
  CalendarHeatmapProps,
} from "../components/calendar/CalendarHeatMap";

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
> = ({ SvgComponent, ...props }) => {
  const values = getCalendarValues();

  return (
    <div style={{ width: "900px" }}>
      <CalendarHeatmap {...props} values={values} SvgComponent={SvgComponent} />
    </div>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  value: getCalendarValues(),
};

export const WithCloverSvg: any = Template.bind({});
WithCloverSvg.args = {
  value: getCalendarValues(),
  SvgComponent: CloverSvg,
  mainColor: "#000000",
  size: 20,
};

export const WithCircleSvg: any = Template.bind({});
WithCircleSvg.args = {
  value: getCalendarValues(),
  SvgComponent: CircleSvg,
  mainColor: "#FF7A35",
  size: 10,
};

export const WithCircleSvgAndHover: any = Template.bind({});
WithCircleSvgAndHover.args = {
  value: getCalendarValues(),
  SvgComponent: CircleSvg,
  mainColor: "#FF7A35",
  size: 15,
  HoverComponent: "hi",
};

export const WithColorSet: any = Template.bind({});
WithColorSet.args = {
  value: getCalendarValues(),
  SvgComponent: CircleSvg,
  depth: 4,
  colorSet: ["#E0E7EE", "#FDDDB8", "#FFC07F", "#FFA55C", "#FF7A35"],
  size: 15,
};
