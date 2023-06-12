import styled from "styled-components";
import DeleteIcon from "../icons/DeleteIcon";

type DeleteButtonPropType = {
  deleteUserMenu: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ModalMenuDeleteButton({
  deleteUserMenu,
}: DeleteButtonPropType) {
  return (
    <S.MenuDeleteButton onClick={deleteUserMenu}>
      <DeleteIcon width={"12"} height={"12"} />
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
