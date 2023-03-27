import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format, addMonths, subMonths } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";

type RenderCellsProps = {
  currentMonth: Date;
};

export default function useRenderCells({ currentMonth }: RenderCellsProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      //   해당 달의 날짜가 아니면 date에 null, 맞다면 날짜 그대로 객체에 들어감
      format(currentMonth, "M") !== format(day, "M")
        ? days.push({ date: null, mainMenu: "", soup: "", side: "" })
        : days.push({ date: formattedDate, mainMenu: "", soup: "", side: "" });
      day = addDays(day, 1);
    }

    rows.push(days);
    days = [];
  }

  return { rows, day };
}
