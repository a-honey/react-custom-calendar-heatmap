import CalendarHeatMap from "../components/calendar/CalendarHeatMap";
import React from "react";

export default {
  title: "CalendarHeatMap",
  component: CalendarHeatMap,
};

const Template: React.FC = () => {
  const values = [
    { value: 10, date: new Date("2024-04-04") },
    { value: 11, date: new Date("2024-04-12") },
    { value: 15, date: new Date("2024-04-15") },
    { value: 16, date: new Date("2024-04-20") },
    { value: 10, date: new Date("2024-04-21") },
    { value: 20, date: new Date("2024-04-22") },
    { value: 10, date: new Date("2024-05-05") },
    { value: 11, date: new Date("2024-05-12") },
    { value: 15, date: new Date("2024-05-15") },
    { value: 16, date: new Date("2024-05-20") },
    { value: 10, date: new Date("2024-05-21") },
    { value: 20, date: new Date("2024-05-22") },
    { value: 10, date: new Date("2024-06-05") },
    { value: 11, date: new Date("2024-06-12") },
    { value: 15, date: new Date("2024-06-15") },
    { value: 16, date: new Date("2024-06-20") },
    { value: 10, date: new Date("2024-06-21") },
    { value: 20, date: new Date("2024-06-22") },
    { value: 10, date: new Date("2024-06-25") },
    { value: 14, date: new Date("2024-06-28") },
    { value: 33, date: new Date("2024-07-05") },
    { value: 22, date: new Date("2024-07-09") },
  ];

  return <CalendarHeatMap values={values} />;
};

export const Default = Template.bind({});
