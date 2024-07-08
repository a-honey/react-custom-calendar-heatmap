interface getGradientColorProps {
  value: number;
  maxValue: number;
  depth: number;
}

export default function getGradientColor({
  value,
  depth,
  maxValue,
}: getGradientColorProps) {
  const depthSize = maxValue / depth;
  const currentDepth = Math.floor(value / depthSize);

  switch (currentDepth) {
    case 0:
      return "#808080";
    case 1:
      return "#A0A0A0";
    case 2:
      return "#C0C0C0";
    case 3:
      return "#E0E0E0";
    case 4:
      return "#00FF00";
    default:
      return "#FFFFFF";
  }
}
