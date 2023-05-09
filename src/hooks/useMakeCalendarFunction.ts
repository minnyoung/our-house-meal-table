import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

export default function useMakeCalenderFunction() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const movePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const moveNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return {
    currentMonth,
    selectedDate,
    movePreviousMonth,
    moveNextMonth,
    onDateClick,
  };
}
