import { HeatMapElementProps } from "types";
import getMaxValue from "./getMaxValue";

describe("getMaxValue function test start", () => {
  it("should return the maximum value from values array", () => {
    const values = [{ value: 10 }, { value: 20 }, { value: 15 }];

    const maxValue = getMaxValue({ values });

    expect(maxValue).toEqual(20);
  });

  it("should return 0 value from empty array", () => {
    const values: HeatMapElementProps[] = [];

    const maxValue = getMaxValue({ values });

    expect(maxValue).toEqual(0);
  });
});
