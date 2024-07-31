import "./App.css";

import { CalendarHeatmap } from "react-custom-calendar-heatmap";
import React from "react";
import SvgComponent from "./SvgComponent";

function App() {
  const values = [
    { value: 0, date: new Date("2024-04-04") },
    { value: 1, date: new Date("2024-04-12") },
    { value: 5, date: new Date("2024-04-15") },
    { value: 6, date: new Date("2024-04-20") },
    { value: 0, date: new Date("2024-04-21") },
    { value: 0, date: new Date("2024-04-22") },
    { value: 0, date: new Date("2024-05-05") },
    { value: 1, date: new Date("2024-05-12") },
    { value: 5, date: new Date("2024-05-15") },
    { value: 6, date: new Date("2024-05-20") },
    { value: 0, date: new Date("2024-05-21") },
    { value: 0, date: new Date("2024-05-22") },
    { value: 0, date: new Date("2024-06-05") },
    { value: 1, date: new Date("2024-06-12") },
    { value: 5, date: new Date("2024-06-15") },
    { value: 6, date: new Date("2024-06-20") },
    { value: 0, date: new Date("2024-06-21") },
    { value: 0, date: new Date("2024-06-22") },
    { value: 0, date: new Date("2024-06-25") },
    { value: 4, date: new Date("2024-06-28") },
    { value: 3, date: new Date("2024-07-05") },
    { value: 2, date: new Date("2024-07-09") },
  ];

  return (
    <div className="App">
      <h1>React Custom Calendar Heatmap Demo</h1>
      <CalendarHeatmap
        weekType="koShort"
        values={values}
        colorSet={["#E0E7EE", "#FDDDB8", "#FFC07F", "#FFA55C", "#FF7A35"]}
        SvgComponent={SvgComponent}
      />
    </div>
  );
}

export default App;
