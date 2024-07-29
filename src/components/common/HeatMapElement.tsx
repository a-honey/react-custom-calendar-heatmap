import {
  HeatmapElementProps,
  HoverComponentProps,
  SVGComponentProps,
} from "../../types";

import DefaultElement from "../../assets/DefaultElement";
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
}: ElementProps) => {
  return (
    <div
      className="heatmap-element"
      onClick={() => {
        console.log(value, color);
      }}
    >
      {HoverComponent &&
        (value === 0 ? (
          <HoverComponent
            className={`heatmap-hover-element ${className}`}
            value={"0"}
          />
        ) : (
          value && (
            <HoverComponent
              className={`heatmap-hover-element ${className}`}
              value={value}
            />
          )
        ))}
      <SvgComponent fill={color} width={size} />
    </div>
  );
};

export default HeatmapElement;
