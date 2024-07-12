import { HeatmapElementProps, SVGComponentProps } from "../../types";

import DefaultElement from "../../assets/DefaultElement";
import React from "react";

interface ElementProps extends HeatmapElementProps {
  color?: string;
  size?: number;
  className: string;
  SvgComponent?: React.FC<SVGComponentProps>;
}

const HeatmapElement = ({
  color = "#CCCCCC",
  size = 20,
  value,
  className,
  SvgComponent = DefaultElement,
}: ElementProps) => {
  return (
    <div className="heatmap-element">
      {value === 0 ? (
        <div className={`heatmap-hover-element ${className}`}>"0"</div>
      ) : (
        value && (
          <div className={`heatmap-hover-element ${className}`}>{value}</div>
        )
      )}
      <SvgComponent fill={color} width={size} />
    </div>
  );
};

export default HeatmapElement;
