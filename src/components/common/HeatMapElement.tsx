import {
  HeatmapElementProps,
  HoverComponentProps,
  SVGComponentProps,
} from "../../types";

import DefaultElement from "../../assets/DefaultElement";
import HoverElement from "./HoverElement";
import React from "react";

interface ElementProps extends HeatmapElementProps {
  color?: string;
  size?: number;
  className: string;
  SvgComponent?: React.FC<SVGComponentProps>;
  HoverComponent?: React.FC<HoverComponentProps>;
}

const HeatmapElement = ({
  color,
  size = 20,
  value,
  className,
  SvgComponent = DefaultElement,
  HoverComponent,
  hoverValue,
}: ElementProps) => {
  return (
    <div
      className={`heatmap-element ${className}`}
      onClick={() => {
        console.log(value, color);
      }}
    >
      {HoverComponent &&
        (value === 0 && hoverValue ? (
          <div />
        ) : (
          value && (
            <div className={`heatmap-hover-element ${className}`}>
              <HoverElement label={hoverValue} value={value} />
            </div>
          )
        ))}
      <SvgComponent fill={color} width={size} />
    </div>
  );
};

export default HeatmapElement;
