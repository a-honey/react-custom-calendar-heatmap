import HeatMapElement from "./HeatMapElement";
import { HeatMapProps } from "../../types";
import React from "react";
import getGradientColor from "../../utils/getGradientColor";
import getMaxValue from "../../utils/getMaxValue";

const HeatMap = ({
  values,
  depth = 5,
  gap,
  row = 7,
  SvgComponent,
}: HeatMapProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap,
        height: `${23 * 7}px`,
        maxWidth: `${Math.ceil(365 / 7)}px`,
      }}
    >
      {values.map(({ value, hoverValue }, index) => (
        <HeatMapElement
          key={index}
          hoverValue={hoverValue}
          value={value}
          SvgComponent={SvgComponent}
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
