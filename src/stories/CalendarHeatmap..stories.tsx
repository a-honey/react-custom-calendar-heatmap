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

const ExampleComponent = ({
  className,
  value,
}: {
  className: string;
  value: string;
}) => {
  const date = new Date(value);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className={className} style={{ color: "white" }}>
      {`${year}년 ${month}월 ${day}일`}
      <div
        style={{
          zIndex: 0,
          position: "absolute",
          right: "-80px",
          bottom: "-0px",
        }}
      >
        <svg
          width="200"
          height="47"
          viewBox="0 0 120 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15C0 12.7909 1.79086 11 4 11H116C118.209 11 120 12.7909 120 15V43C120 45.2091 118.209 47 116 47H4C1.79086 47 0 45.2091 0 43V15Z"
            fill="#1E293B"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="16"
          >
            {value}
          </text>
          <path
            d="M20.2103 1.82123C19.4317 0.536959 17.5683 0.536957 16.7897 1.82122L11.2477 10.9632C10.4397 12.2961 11.3993 14 12.958 14L24.042 14C25.6007 14 26.5603 12.2961 25.7523 10.9632L20.2103 1.82123Z"
            fill="#1E293B"
          />
          <path
            d="M68.0312 32.7656H58.3516V31.6758H68.0312V32.7656ZM67.1875 25.4766H65.6406V28.8516H67.1523V29.8828H59.1836V28.8516H60.6719V25.4766H59.1484V24.4336H67.1875V25.4766ZM64.3516 28.8516V25.4766H61.9727V28.8516H64.3516ZM78.7906 30.4219H69.1109V29.3672H73.3062V28.4414H70.3414V25.6289H76.2945V24.7383H70.3062V23.7188H77.5953V26.5547H71.6305V27.4336H77.8062V28.4414H74.5953V29.3672H78.7906V30.4219ZM77.8297 34.043H70.3531V31.0078H71.6656V32.9883H77.8297V34.043ZM88.507 30.0352H81.0773V24.2812H88.4133V25.3359H82.4016V26.6133H88.1672V27.6328H82.4016V29.0039H88.507V30.0352ZM89.5734 32.7539H79.8937V31.6875H89.5734V32.7539ZM93.1609 24.2461C93.575 24.2461 93.952 24.334 94.2918 24.5098C94.6316 24.6855 94.9109 24.9355 95.1297 25.2598C95.3523 25.5801 95.4969 25.9531 95.5633 26.3789H96.407V23.6367H97.6141V31.0312H96.407V27.4453H95.5516C95.4813 27.8555 95.3348 28.2168 95.1121 28.5293C94.8895 28.8418 94.6102 29.084 94.2742 29.2559C93.9383 29.4238 93.5672 29.5078 93.1609 29.5078C92.6961 29.5078 92.2801 29.3965 91.9129 29.1738C91.5457 28.9512 91.2566 28.6406 91.0457 28.2422C90.8387 27.8438 90.7352 27.3906 90.7352 26.8828C90.7352 26.3672 90.8387 25.9102 91.0457 25.5117C91.2527 25.1094 91.5398 24.7988 91.907 24.5801C92.2781 24.3574 92.6961 24.2461 93.1609 24.2461ZM93.1609 25.3594C92.9148 25.3594 92.6961 25.4219 92.5047 25.5469C92.3133 25.6719 92.1648 25.8496 92.0594 26.0801C91.9539 26.3105 91.9031 26.5781 91.907 26.8828C91.9031 27.1875 91.9539 27.4531 92.0594 27.6797C92.1648 27.9062 92.3133 28.0801 92.5047 28.2012C92.6961 28.3223 92.9148 28.3828 93.1609 28.3828C93.4031 28.3828 93.6199 28.3223 93.8113 28.2012C94.0027 28.0801 94.1531 27.9062 94.2625 27.6797C94.3758 27.4492 94.4344 27.1836 94.4383 26.8828C94.4344 26.5781 94.3758 26.3105 94.2625 26.0801C94.1531 25.8496 94.0027 25.6719 93.8113 25.5469C93.6199 25.4219 93.4031 25.3594 93.1609 25.3594ZM99.7234 31.3477H98.4813V23.4492H99.7234V31.3477ZM100.016 33.832H92.6336V30.3281H93.9344V32.7773H100.016V33.832ZM110.037 29.4609H102.608V24.375H109.955V25.4297H103.897V28.418H110.037V29.4609ZM111.116 32.6953H101.436V31.6172H111.116V32.6953Z"
            fill="#1E293B"
          />
        </svg>
      </div>
    </div>
  );
};
export const WithCircleSvgAndHover: any = Template.bind({});
WithCircleSvgAndHover.args = {
  values: getCalendarValues(),
  SvgComponent: CircleSvg,
  mainColor: "#FF7A35",
  size: 15,
};

export const WithColorSet: any = Template.bind({});
WithColorSet.args = {
  values: [
    {
      value: 60,
      date: new Date("2024-07-26"),
      hoverValue: "hi",
    },
    {
      value: 40,
      date: new Date("2024-07-27"),
      hoverValue: "woo",
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
  HoverComponent: ExampleComponent,
  depth: 4,
  colorSet: ["#E0E7EE", "#17990b", "#ffd000", "#ff7300", "#ff0000"],
  size: 15,
};
