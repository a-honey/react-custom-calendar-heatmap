import DefaultElement from "assets/DefaultElement";
import { HeatMapElementProps } from "types";

interface ElementProps extends HeatMapElementProps {
  color?: string;
  size?: number;
}

const HeatMapElement = ({ color = "#CCCCCC", size }: ElementProps) => {
  return <DefaultElement fill={color} size={size} />;
};

export default HeatMapElement;
