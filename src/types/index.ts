export interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  size?: number;
}

export interface HeatmapElementProps {
  hoverValue?: string;
  value: number | null;
  HoverProps?: object;
}
export interface HeatmapProps {
  className?: string;
  style?: React.CSSProperties;
  SvgComponent?: React.FC<SVGComponentProps>;
  HoverComponent?: React.FC;
  HoverProps?: object;
  values: HeatmapElementProps[];
  gap?: number;
  depth?: number;
  size?: number;
  col?: number;
  row?: number;
  mainColor?: string;
  baseColor?: string;
  colorSet?: string[];
}

export interface HoverComponentProps {
  className: string;
  value: string;
}
