import HeatmapElement from "./HeatmapElement";
import { HeatmapProps } from "../../types";
import React from "react";
import getElementColorInfo from "../../utils/getElementColorInfo";
import getMaxValue from "../../utils/getMaxValue";

const Heatmap = ({
  values,
  depth = 5,
  SvgComponent,
  HoverComponent,
  className,
  mainColor,
  size,
}: HeatmapProps) => {
  return (
    <div className={`heatmap-container ${className}`}>
      {values.map(({ value, hoverValue }, index) => {
        const { className, color } = getElementColorInfo({
          value,
          depth,
          mainColor,
          maxValue: getMaxValue({ values }),
        });
        return (
          <HeatmapElement
            size={size}
            className={className}
            key={index}
            hoverValue={hoverValue}
            HoverComponent={HoverComponent}
            value={value}
            SvgComponent={SvgComponent}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default Heatmap;
