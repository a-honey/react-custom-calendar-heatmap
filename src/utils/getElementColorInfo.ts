import getGradientColorSet from "./getGradientColorSet";

interface getElementColorInfoProps {
  value: number | null;
  maxValue: number;
  mainColor?: string;
  baseColor?: string;
  depth?: number;
}

export default function getElementColorInfo({
  value,
  depth = 5,
  mainColor = "#FF5733",
  baseColor = "#ccd6e3",
  maxValue,
}: getElementColorInfoProps) {
  if (!value)
    return { className: "heatmap-element-depth-empty", color: baseColor };

  const depthSize = maxValue / depth;
  const currentDepth = Math.floor(value / depthSize);

  const gradientColorSet = getGradientColorSet({ mainColor, depth });

  return {
    className: `heatmap-element-depth-${currentDepth}`,
    color: gradientColorSet[currentDepth],
  };
}
