import { useState } from "react";
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
  const [isVisibleBubble, setIsVisibleBubble] = useState(false);
  return (
    <S.Container>
      <S.Button
        type="button"
        onClick={onClickEvent}
        onMouseEnter={() => setIsVisibleBubble(true)}
        onMouseLeave={() => setIsVisibleBubble(false)}
      >
        {menuIcon}
      </S.Button>
      <S.OuterContainer isVisibleBubble={isVisibleBubble}>
        <S.InnerContainer>
          <S.BubbleArrowContainer>
            <S.BubbleArrow></S.BubbleArrow>
          </S.BubbleArrowContainer>
          <S.BubbleTextContainer>
            <S.BubbleText>{buttonText}</S.BubbleText>
          </S.BubbleTextContainer>
        </S.InnerContainer>
      </S.OuterContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
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
  OuterContainer: styled.div<{ isVisibleBubble: boolean }>`
    top: 135px;
    margin-left: 8px;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    display: ${({ isVisibleBubble }) => (isVisibleBubble ? "block" : "none")};
  `,
  InnerContainer: styled.div`
    background-color: #ffffff;
    color: black;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 22px;
    padding: 8px 12px;
    position: relative;
    transition: opacity 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: max-content;
  `,
  BubbleArrowContainer: styled.div`
    display: block;
    pointer-events: none;
    position: absolute;
    width: 100%;
    top: calc(-50% + 3px);
    bottom: 25%;
    right: 15%;
    transform: rotate(90deg);
  `,
  BubbleArrow: styled.div`
    margin-top: auto;
    margin-right: auto;
    background-color: #ffffff;
    clip-path: path(
      "M8 0C8 4 9.32406e-08 7.819 1.25211e-07 10.5C1.57188e-07 13.1815 8 17.0005 8 21L8 0Z"
    );
    margin-bottom: auto;
    width: 21px;
    margin-left: auto;
    height: 21px;
    display: block;
  `,
  BubbleTextContainer: styled.div`
    align-items: stretch;
    border: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    font: inherit;
    font-size: 14px;
    line-height: 19px;
    margin: 0;
    padding: 0;
    position: relative;
    vertical-align: baseline;
  `,
  BubbleText: styled.span`
    overflow-x: visible;
    display: block;
    white-space: pre-line;
    max-width: 100%;
    overflow-y: visible;
    word-break: break-word;
    font-weight: 400;
    word-wrap: break-word;
    position: relative;
  `,
};
