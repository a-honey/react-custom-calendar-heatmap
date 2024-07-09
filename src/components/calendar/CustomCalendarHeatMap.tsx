import Container from "./Container";
import MonthLabel from "./MonthLabel";
import WeekLabel from "./WeekLabel";

interface CustomCalendarHeatmapProps {
  children: React.ReactNode;
}
const CustomCalendarHeatmap = ({ children }: CustomCalendarHeatmapProps) => {
  return <Container>{children}</Container>;
};

CustomCalendarHeatmap.Month = <MonthLabel />;
CustomCalendarHeatmap.Week = <WeekLabel />;

export default CustomCalendarHeatmap;
