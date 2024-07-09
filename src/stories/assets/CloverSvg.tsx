const CloverSvg = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5,1.5
           A1.75,1.75 0 0,1 8.25,4
           A1.75,1.75 0 0,1 5,6.5
           A1.75,1.75 0 0,1 1.75,4
           A1.75,1.75 0 0,1 5,1.5
           Z"
        fill="current"
      />
    </svg>
  );
};

export default CloverSvg;
