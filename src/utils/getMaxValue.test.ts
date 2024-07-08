import { HeatMapElementProps } from "types";
import getMaxValue from "./getMaxValue";

describe("getMaxValue function test start", () => {
  it("should return the maximum value from values array", () => {
    const values = [
      { value: 10, date: new Date() },
      { value: 20, date: new Date() },
      { value: 15, date: new Date() },
    ];

    const maxValue = getMaxValue({ values });

    expect(maxValue).toEqual(20);
  });

  it("should return 0 value from empty array", () => {
    const values: HeatMapElementProps[] = [];

    const maxValue = getMaxValue({ values });

    expect(maxValue).toEqual(0);
  });
});
