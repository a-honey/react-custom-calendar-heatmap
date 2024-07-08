import { HeatMapElementProps, SVGComponentProps } from "types";

import DefaultElement from "assets/DefaultElement";
import React from "react";

interface ElementProps extends HeatMapElementProps {
  color?: string;
  size?: number;
  SvgComponent?: React.FC<SVGComponentProps>;
}

const HeatMapElement = ({
  color = "#CCCCCC",
  size = 20,
  SvgComponent = DefaultElement,
}: ElementProps) => {
  return <SvgComponent fill={color} size={size} />;
};

export default HeatMapElement;
