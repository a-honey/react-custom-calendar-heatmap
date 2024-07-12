export interface getGradientColorSetProps {
  mainColor: string;
  depth?: number;
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}

export default function getGradientColorSet({
  mainColor,
  depth = 5,
}: getGradientColorSetProps) {
  const colorString = mainColor.replace("#", "");
  const [r, g, b] = hexToRgb(colorString);

  const gradientColors = [];
  for (let i = 0; i <= depth; i++) {
    const factor = i / depth;
    const newR = Math.round(r * (1 - factor) + 255 * factor);
    const newG = Math.round(g * (1 - factor) + 255 * factor);
    const newB = Math.round(b * (1 - factor) + 255 * factor);
    gradientColors.push(rgbToHex(newR, newG, newB));
  }

  return gradientColors;
}
