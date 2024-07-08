import { CustomCalendarHeatmapProps } from "types";
import HeatMap from "components/common/Heatmap";
import React from "react";

const CustomCalendarHeatMap = ({ values }: CustomCalendarHeatmapProps) => {
  return (
    <div>
      <HeatMap values={values} />
    </div>
  );
};

export default CustomCalendarHeatMap;
