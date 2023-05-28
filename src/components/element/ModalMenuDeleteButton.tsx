import styled from "styled-components";

type DeleteButtonPropType = {
  deleteUserMenu: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ModalMenuDeleteButton({
  deleteUserMenu,
}: DeleteButtonPropType) {
  return (
    <S.MenuDeleteButton onClick={deleteUserMenu}>
      <svg
        className="feather feather-trash-2"
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
    </S.MenuDeleteButton>
  );
}

const S = {
  MenuDeleteButton: styled.button`
    font-size: 13px;
    text-align: right;
    border-radius: 15px;
    color: #aaaaaa;
    transition: 0.1s ease-in-out;
    :hover {
      transition: 0.1s ease-in-out;
      color: black;
    }
  `,
};
