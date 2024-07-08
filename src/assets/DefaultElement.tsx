import React from "react";

interface DefaultElementProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DefaultElement = ({
  size = 20,
  fill = "#CCCCCC",
  ...props
}: DefaultElementProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      {...props}
    >
      <rect width="100%" height="100%" fill="current" />
    </svg>
  );
};

export default DefaultElement;
