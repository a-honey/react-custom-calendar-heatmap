import React from "react";

interface ContainerProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Container = ({ style, children }: ContainerProps) => {
  return <div style={style}>{children}</div>;
};

export default Container;
