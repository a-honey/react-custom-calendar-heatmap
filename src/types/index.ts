export interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
}

export interface HeatMapElementProps {
  hoverValue?: string;
  value: number | null;
}
export interface HeatMapProps {
  style?: React.CSSProperties;
  SvgComponent?: React.FC<SVGComponentProps>;
  values: HeatMapElementProps[];
  gap?: number;
  depth?: number;
  col?: number;
  row?: number;
}
