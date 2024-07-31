import getGradientColorSet from "./getGradientColorSet";

interface getElementColorInfoProps {
  value: number | null;
  maxValue: number;
  mainColor?: string;
  baseColor?: string;
  depth?: number;
  colorSet?: string[];
}

export default function getElementColorInfo({
  value,
  depth = 5,
  mainColor = "#FF5733",
  baseColor = "#ccd6e3",
  maxValue,
  colorSet,
}: getElementColorInfoProps) {
  if (!value || value === 0)
    return {
      className: "heatmap-element-depth-empty",
      color: colorSet ? colorSet[0] : baseColor,
    };

  const depthSize = maxValue / depth;
  const currentDepth = Math.floor(value / depthSize);

  const gradientColorSet = getGradientColorSet({ mainColor, depth });

  if (currentDepth === 0 && value > 0) {
    return {
      className: `heatmap-element-depth-1`,
      color: colorSet ? colorSet[1] : gradientColorSet[1],
    };
  }
  return {
    className: `heatmap-element-depth-${currentDepth}`,
    color: colorSet ? colorSet[currentDepth] : gradientColorSet[currentDepth],
  };
}
