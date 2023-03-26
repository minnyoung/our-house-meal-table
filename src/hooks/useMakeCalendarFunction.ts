import React, { useState } from 'react'
import { format, addMonths, subMonths } from "date-fns";


export default function useMakeCalenderFunction () {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };


    return {currentMonth, selectedDate, prevMonth, nextMonth, onDateClick}
}