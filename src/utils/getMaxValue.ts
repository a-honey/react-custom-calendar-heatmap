import { CustomCalendarHeatmapProps } from "types";

export default function getMaxValue({
  values,
}: Pick<CustomCalendarHeatmapProps, "values">) {
  const maxValueElement = values.reduce(
    (max, current) => (current.value > max.value ? current : max),
    values[0]
  );

  return maxValueElement.value;
}
