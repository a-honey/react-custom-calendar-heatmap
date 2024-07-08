import Container from "./Container";
import MonthLabel from "./MonthLabel";
import WeekLabel from "./WeekLabel";

interface CustomCalendarHeatMapProps {
  children: React.ReactNode;
}
const CustomCalendarHeatMap = ({ children }: CustomCalendarHeatMapProps) => {
  return <Container>{children}</Container>;
};

CustomCalendarHeatMap.Month = <MonthLabel />;
CustomCalendarHeatMap.Week = <WeekLabel />;

export default CustomCalendarHeatMap;
