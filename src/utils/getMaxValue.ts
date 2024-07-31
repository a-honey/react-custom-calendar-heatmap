import { HeatmapProps } from "../types";

export default function getMaxValue({ values }: Pick<HeatmapProps, "values">) {
  if (values.length === 0) return 0;

  const maxValueElement = values.reduce(
    (max, current) => {
      if (current.value === null) {
        return max;
      }
      return current.value > (max.value ?? -Infinity) ? current : max;
    },
    { value: null }
  );

  return maxValueElement.value ?? 0;
}
