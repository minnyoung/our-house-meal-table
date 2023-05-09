import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format, addMonths, subMonths } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import { stringify } from "querystring";

type RenderCellsProps = {
  currentMonth: Date;
};

export default function useCalendarDays({ currentMonth }: RenderCellsProps) {
  const monthStartDate = startOfMonth(currentMonth);
  const monthEndDate = endOfMonth(monthStartDate);
  const calendarStartDate = startOfWeek(monthStartDate);
  const calendarEndDate = endOfWeek(monthEndDate);

  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDay = new Date().getDate();

  const todayDate = `${todayYear}${todayMonth}${todayDay}`;

  const weeks = [];
  let days = [];
  let day = calendarStartDate;

  while (day <= calendarEndDate) {
    for (let i = 0; i < 7; i++) {
      //   해당 달의 날짜가 아니면 date에 null, 맞다면 날짜 그대로 객체에 들어감
      format(currentMonth, "M") !== format(day, "M")
        ? days.push({ day: null })
        : days.push({
            year: format(day, "yyyy"),
            month: format(currentMonth, "M"),
            day: format(day, "d"),
          });
      day = addDays(day, 1);
    }

    weeks.push(days);
    days = [];
  }

  return { weeks, todayDate };
}
