import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCalendarDays from "../../hooks/useCalendarDays";
import UserMenuText from "../UserMenuText";
import MenuModal from "../MenuModal";
import { useMakeMenuListFunction } from "../../hooks/useMakeMenuListFunction";

type CalendarCellsProps = {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
};

// 날짜부분
// TODO: selectedDate 이용해서 오늘 날짜 표시 변경하기
export default function CalendarBody({
  currentMonth,
  selectedDate,
  onDateClick,
}: CalendarCellsProps) {
  const [menuDate, setMenuDate] = useState("");
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
  const [clickCalendarDate, setClickCalendarDate] = useState("");
  const { weeks, todayDate } = useCalendarDays({
    currentMonth,
  });
  const { makeMenuList } = useMakeMenuListFunction(menuDate);

  useEffect(() => {
    setIsOpenMenuModal(false);
  }, [currentMonth]);

  // console.log("최종메뉴: ", userMenuList);

  return (
    <S.Container className="body">
      {isOpenMenuModal && (
        <MenuModal
          date={clickCalendarDate}
          setIsOpenMenuModal={setIsOpenMenuModal}
        />
      )}
      {weeks.map((week, index) => (
        <S.WeeksWrapper key={`weeks-${index}`}>
          <S.DaysWrapper>
            {week.map((day, index) => (
              <S.DayBox
                key={`week-${index}`}
                calendarDate={`${day.year}${day.month}${day.day}`}
                todayDate={todayDate}
                onClick={() => {
                  if (day.day) {
                    setClickCalendarDate(`${day.year}-${day.month}-${day.day}`);
                    setIsOpenMenuModal(true);
                  }
                }}
                onDropCapture={() => {
                  setMenuDate(`${day.year}-${day.month}-${day.day}`);
                }}
                onDrop={makeMenuList}
                onDragOver={(event) => event.preventDefault()}
              >
                <S.DayNumber weekdayNumber={String(index)}>
                  {day.day}
                </S.DayNumber>
                <S.MenuListWrapper>
                  {!day.day ? null : (
                    <>
                      <UserMenuText date={day} menuType="userMainMenu" />
                      <UserMenuText date={day} menuType="userSoup" />
                      <UserMenuText date={day} menuType="userSideMenu" />
                    </>
                  )}
                </S.MenuListWrapper>
              </S.DayBox>
            ))}
          </S.DaysWrapper>
        </S.WeeksWrapper>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  WeeksWrapper: styled.div`
    width: 100%;
    height: 93%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    border: 0.4px solid transparentize(gray, 0.4);
    border-radius: 3px;
    font-size: 0.8em;
  `,
  DaysWrapper: styled.div`
    width: 100%;
    height: 136px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  DayBox: styled.div<{
    calendarDate: string;
    todayDate: string;
  }>`
    width: 130px;
    height: 130px;
    margin: 3px;
    border: 1px solid rgb(202, 202, 202);
    border-radius: 10px;
    background-color: ${({ calendarDate, todayDate }) =>
      calendarDate === todayDate ? "#ffc8f12e" : "null"};
    :hover {
      cursor: pointer;
    }
  `,
  DayNumber: styled.span<{ weekdayNumber: string }>`
    display: flex;
    padding: 7px 0 0 8px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ weekdayNumber }) =>
      weekdayNumber === "0"
        ? "#ff5151"
        : weekdayNumber === "6"
        ? "#2631ff"
        : "#181818"};
  `,
  MenuListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
