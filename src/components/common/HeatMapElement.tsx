import "./HeatmapElement.css";

import { HeatmapElementProps, SVGComponentProps } from "../../types";

import DefaultElement from "../../assets/DefaultElement";
import React from "react";

interface ElementProps extends HeatmapElementProps {
  color?: string;
  size?: number;
  SvgComponent?: React.FC<SVGComponentProps>;
}

const HeatmapElement = ({
  color = "#CCCCCC",
  size = 20,
  value,
  SvgComponent = DefaultElement,
}: ElementProps) => {
  return (
    <div
      className="heatmap-element"
      style={{
        position: "relative",
      }}
    >
      {value && <div className="hover-element">{value}</div>}
      <SvgComponent fill={color} size={size} />
    </div>
  );
};

export default HeatmapElement;
