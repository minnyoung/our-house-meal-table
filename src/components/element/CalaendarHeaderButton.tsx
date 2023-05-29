import styled from "styled-components";

type CalendarHeaderButtonProps = {
  buttonText: string;
  menuIcon: JSX.Element;
  onClickEvent: () => void;
};

export default function CalendarHeaderButton({
  menuIcon,
  buttonText,
  onClickEvent,
}: CalendarHeaderButtonProps) {
  return (
    <S.Button type="button" onClick={onClickEvent}>
      {menuIcon}
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 5px;
    background-color: transparent;
    :hover {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      background-color: #f1f1f1;
    }
  `,
};
