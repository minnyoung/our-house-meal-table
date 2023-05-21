import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <S.Container>
      <S.LoadingIcon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.713 11.9999C23.713 9.68334 23.026 7.41879 21.739 5.49263C20.452 3.56647 18.6227 2.06521 16.4825 1.17869C14.3422 0.292179 11.9872 0.0602264 9.71511 0.512168C7.44305 0.964109 5.35602 2.07965 3.71796 3.71771C2.07989 5.35578 0.964353 7.4428 0.512412 9.71486C0.0604705 11.9869 0.292423 14.342 1.17894 16.4822C2.06545 18.6225 3.56671 20.4517 5.49288 21.7388C7.41904 23.0258 9.68359 23.7127 12.0002 23.7127V21.3702C10.1469 21.3702 8.33526 20.8206 6.79433 19.791C5.2534 18.7614 4.0524 17.2979 3.34318 15.5858C2.63397 13.8736 2.44841 11.9895 2.80996 10.1719C3.17151 8.35423 4.06394 6.68461 5.3744 5.37415C6.68485 4.0637 8.35447 3.17127 10.1721 2.80972C11.9898 2.44816 13.8738 2.63373 15.586 3.34294C17.2982 4.05215 18.7616 5.25316 19.7912 6.79409C20.8209 8.33502 21.3704 10.1467 21.3704 11.9999H23.713Z"
            fill="#4B4B4B"
          />
        </svg>
      </S.LoadingIcon>
      <div>식단표 불러오는 중</div>
    </S.Container>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  LoadingIcon: styled.div`
    width: 24px;
    height: 24px;
    margin-bottom: 20px;
    animation: ${spin} 2s linear infinite;
  `,
};
