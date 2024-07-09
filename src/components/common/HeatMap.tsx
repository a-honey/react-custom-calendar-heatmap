import HeatmapElement from "./HeatmapElement";
import { HeatmapProps } from "../../types";
import React from "react";
import getGradientColor from "../../utils/getGradientColor";
import getMaxValue from "../../utils/getMaxValue";

const Heatmap = ({
  values,
  depth = 5,
  SvgComponent,
  className,
}: HeatmapProps) => {
  return (
    <div className={`heatmap-container ${className}`}>
      {values.map(({ value, hoverValue }, index) => (
        <HeatmapElement
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

export default Heatmap;
