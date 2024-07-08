export interface HeatMapElementProps {
  date: Date;
  value: number;
}

export interface CustomCalendarHeatmapProps {
  startDate: Date;
  endDate: Date;
  values: HeatMapElementProps[];
  gap?: number;
  depth?: number;
}
