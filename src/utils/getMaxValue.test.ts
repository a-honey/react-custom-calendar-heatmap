import { HeatmapProps } from "../types";
import getMaxValue from "./getMaxValue";

describe("values가 들어오면 최댓값을 반환하는 getMaxValue", () => {
  it("빈배열이 들어오면 0을 반환한다.", () => {
    const result = getMaxValue({ values: [] });
    expect(result).toBe(0);
  });

  it("2개 이상의 요소가 들어오면 최댓값을 반환한다.", () => {
    const values: HeatmapProps["values"] = [
      { value: 10 },
      { value: 20 },
      { value: 5 },
    ];
    const result = getMaxValue({ values });
    expect(result).toBe(20);
  });

  it("1개의 요소가 들어오면 해당 value를 반환한다.", () => {
    const values: HeatmapProps["values"] = [{ value: 10 }];
    const result = getMaxValue({ values });
    expect(result).toBe(10);
  });
});
