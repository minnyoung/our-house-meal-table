import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format, addMonths, subMonths } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import { stringify } from "querystring";

type RenderCellsProps = {
  currentMonth: Date;
};

export default function useCalendarCells({ currentMonth }: RenderCellsProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDay = new Date().getDate();

  const todayDate = `${todayYear}${todayMonth}${todayDay}`;

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDay = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDay = format(day, "d");
      //   해당 달의 날짜가 아니면 date에 null, 맞다면 날짜 그대로 객체에 들어감
      format(currentMonth, "M") !== format(day, "M")
        ? days.push({ date: null })
        : days.push({
            year: format(day, "yyyy"),
            month: format(currentMonth, "M"),
            day: formattedDay,
          });
      day = addDays(day, 1);
    }

    rows.push(days);
    days = [];
  }

  return { rows, day, todayDate };
}
