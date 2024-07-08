import DefaultElement from "assets/DefaultElement";
import { HeatMapElementProps } from "types";
import React from "react";

const HeatMap = ({
  values,
}: {
  values: HeatMapElementProps[];
  SVGElement?: JSX.Element;
}) => {
  return (
    <div>
      {values.map(({ value, date }, index) => (
        <DefaultElement key={index} />
      ))}
    </div>
  );
};

export default HeatMap;
