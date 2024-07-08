import "./HeatMapElement.css";

import { HeatMapElementProps, SVGComponentProps } from "../../types";

import DefaultElement from "../../assets/DefaultElement";
import React from "react";

interface ElementProps extends HeatMapElementProps {
  color?: string;
  size?: number;
  SvgComponent?: React.FC<SVGComponentProps>;
}

const HeatMapElement = ({
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

export default HeatMapElement;
