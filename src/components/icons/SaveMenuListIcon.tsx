import styled from "styled-components";

export default function SaveMenuListIcon() {
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
          d="M2 2L2 16H16V5.82843L13.5 3.32843V5C13.5 6.10457 12.6046 7 11.5 7H6C4.89543 7 4 6.10457 4 5V2H2ZM11.5 5V2L6 2V5H11.5ZM5 0H12.5H13L18 5V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.895431 0 2 0H5ZM10.5 11.5C10.5 12.3284 9.82843 13 9 13C8.17157 13 7.5 12.3284 7.5 11.5C7.5 10.6716 8.17157 10 9 10C9.82843 10 10.5 10.6716 10.5 11.5ZM12.5 11.5C12.5 13.433 10.933 15 9 15C7.067 15 5.5 13.433 5.5 11.5C5.5 9.567 7.067 8 9 8C10.933 8 12.5 9.567 12.5 11.5Z"
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
