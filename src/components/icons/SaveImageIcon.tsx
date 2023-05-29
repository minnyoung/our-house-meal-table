import styled from "styled-components";

export default function SaveImageIcon() {
  return (
    <AlignCenter>
      <svg
        width="20"
        height="20"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2929 7.29289L10 8.58579L10 1C10 0.447715 9.55229 0 9 0C8.44771 0 8 0.447715 8 1L8 8.58579L6.70711 7.29289C6.31658 6.90237 5.68342 6.90237 5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L8.29289 11.7071L9 12.4142L9.70711 11.7071L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289ZM2 9C2 8.44771 1.55228 8 1 8C0.447715 8 0 8.44771 0 9V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V9C18 8.44771 17.5523 8 17 8C16.4477 8 16 8.44771 16 9V15C16 15.5523 15.5523 16 15 16H3C2.44772 16 2 15.5523 2 15V9Z"
          fill="black"
        />
      </svg>
    </AlignCenter>
  );
}

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;
