import styled from "styled-components";

type CalendarHeaderButtonProps = {
  buttonText: string;
  onClickEvent: () => void;
};

export default function CalendarHeaderButton({
  buttonText,
  onClickEvent,
}: CalendarHeaderButtonProps) {
  return (
    <S.Button type="button" onClick={onClickEvent}>
      {buttonText}
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    width: 50px;
    margin-left: 5%;
    padding: 5px 5px;

    font-size: 10px;
    background-color: transparent;
    border: 1px solid #bebebe;
    border-radius: 5px;
    :hover {
      transition: 0.1s ease-in-out;
      cursor: pointer;
      background-color: #dddddd;
    }
  `,
};
