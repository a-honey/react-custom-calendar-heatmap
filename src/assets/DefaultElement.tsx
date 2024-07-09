import React from "react";

const DefaultElement = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100%" height="100%" fill="current" />
    </svg>
  );
};

export default DefaultElement;
