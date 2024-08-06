import React from "react";

const HoverElement = ({
  label = "",
  value,
}: {
  label?: string;
  value: string | number;
}) => {
  const date = new Date(label);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div
      style={{
        position: "absolute",
        top: "-70px",
        left: "-15px",
        width: "126px",
        height: "79px",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          padding: "6px 8px",
          top: 0,
          left: "0px",
          zIndex: 999,
        }}
      >
        <div
          style={{
            color: "#CCD6E3",
            fontFamily: "Pretendard",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px" /* 157.143% */,
            letterSpacing: "0.2px",
          }}
        >{`${year}년 ${month}월 ${day}일`}</div>
        <div
          style={{
            color: "#FFF",
            fontFamily: "Pretendard",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "26px" /* 157.143% */,
            letterSpacing: "0.6px",
          }}
        >
          {Math.floor(Number(value) / 60)}시간 {Number(value) % 60}분
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}>
        <svg
          width="118"
          height="71"
          viewBox="0 0 118 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H114C116.209 0 118 1.79086 118 4V56C118 58.2091 116.209 60 114 60H4C1.79086 60 0 58.2091 0 56V4Z"
            fill="#1E293B"
          />
          <path
            d="M16.7897 69.1788C17.5683 70.463 19.4317 70.463 20.2103 69.1788L25.7523 60.0368C26.5603 58.7039 25.6007 57 24.042 57H12.958C11.3993 57 10.4397 58.7039 11.2477 60.0368L16.7897 69.1788Z"
            fill="#1E293B"
          />
        </svg>
      </div>
    </div>
  );
};

export default HoverElement;
