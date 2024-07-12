import getGradientColorSet, {
  getGradientColorSetProps,
} from "../utils/getGradientColorSet";

import React from "react";

const GradientColorSet = ({ mainColor, depth }: getGradientColorSetProps) => {
  const gradientColors = getGradientColorSet({ mainColor, depth });

  return (
    <div style={{ display: "flex" }}>
      {gradientColors.map((color: string, index: number) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
          }}
        />
      ))}
    </div>
  );
};

export default {
  title: "Example/GradientColorSet",
  component: GradientColorSet,
};

const Template = (args: any) => <GradientColorSet {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  mainColor: "#FF5733",
  depth: 5,
};
