export interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
}

export interface HeatMapElementProps {
  hoverValue?: string;
  value: number;
}
export interface HeatMapProps {
  SvgComponent?: React.FC<SVGComponentProps>;
  startRange: number;
  endRange: number;
  values: HeatMapElementProps[];
  gap?: number;
  depth?: number;
}
