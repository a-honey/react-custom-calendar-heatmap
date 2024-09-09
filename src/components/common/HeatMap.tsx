import HeatmapElement from "./HeatMapElement";
import { HeatmapProps } from "../../types";
import React from "react";
import getElementColorInfo from "../../utils/getElementColorInfo";
import getMaxValue from "../../utils/getMaxValue";

const Heatmap = ({
  values,
  depth = 5,
  className,
  mainColor,
  colorSet,
  ...props
}: HeatmapProps) => {
  return (
    <div className={`heatmap-container ${className}`}>
      {values.map(({ value, hoverValue }, index) => {
        const { className, color } = getElementColorInfo({
          value,
          depth,
          mainColor,
          maxValue: getMaxValue({ values }),
          colorSet,
        });
        return (
          <HeatmapElement
            className={className}
            key={index}
            hoverValue={hoverValue}
            value={value}
            color={colorSet && value === 0 ? colorSet[0] : color}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default Heatmap;
