import { CustomCalendarHeatmapProps } from "types";
import HeatMapElement from "./HeatMapElement";
import React from "react";
import getGradientColor from "utils/getGradientColor";
import getMaxValue from "utils/getMaxValue";

interface HeatMapProps extends CustomCalendarHeatmapProps {
  SVGElement?: JSX.Element;
}

const HeatMap = ({ values, depth = 5 }: HeatMapProps) => {
  return (
    <div>
      {values.map(({ value, date }, index) => (
        <HeatMapElement
          key={index}
          date={date}
          value={value}
          color={getGradientColor({
            value,
            depth,
            maxValue: getMaxValue({ values }),
          })}
        />
      ))}
    </div>
  );
};

export default HeatMap;
