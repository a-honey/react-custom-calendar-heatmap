interface getGradientColorProps {
  value: number | null;
  maxValue: number;
  depth: number;
}

export default function getGradientColor({
  value,
  depth,
  maxValue,
}: getGradientColorProps) {
  if (!value) return "#ccd6e3";

  const depthSize = maxValue / depth;
  const currentDepth = Math.floor(value / depthSize);

  switch (currentDepth) {
    case 0:
      return "#ccd6e3";
    case 1:
      return "#fdddb8";
    case 2:
      return "#ffc07f";
    case 3:
      return "#ff7a35";
    case 4:
      return "#00FF00";
    default:
      return "#ccd6e3";
  }
}
