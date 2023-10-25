<div align="center">
<!--    <img src="로고url" width="500">   -->
  <h2>🍽 우리집 한 달 식단표를 만들어봐요! 🍽</h2>
  <br><br>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fminnyoung%2Four-house-meal-table&count_bg=%23BBBBBB&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>
  <br><br>
<div align="center">
    <img src="https://img.shields.io/badge/React-18.0.29-61DAFB?logo=React"> 
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript"> 
    <img src="https://img.shields.io/badge/firebase-9.21.0-FFCA28?logo=firebase">
      <img src="https://img.shields.io/badge/zustand-4.3.6-000000?logo=zustand"> 
  <img src="https://img.shields.io/badge/styled components-5.3.9-DB7093?logo=styledcomponents"> 
</div>

<br /><br />

## 목차

- [우리집 식단표 서비스 소개](#우리집-식단표-서비스-소개)
- [기능 소개](#기능-소개)
  - [회원가입 / 로그인](#회원가입--로그인)
  - [달력에 메뉴 등록하기](#달력에-메뉴-등록하기)
  - [메뉴 검색하기](#메뉴-검색하기)
  - [추가 기능](#추가기능)
    - [서비스 이용방법 메뉴얼 구현](#서비스-이용방법-메뉴얼-구현)
    - [등록한 메뉴 레시피 검색페이지로 이동](#등록한-메뉴-레시피-검색페이지로-이동)
    - [식단표를 이미지로 저장할 수 있는 기능](#식단표를-이미지로-저장할-수-있는-기능)
- [핵심 기술](#핵심-기술)
- [실행방법](#실행방법)
- [폴더구조](#폴더구조)

  <br /> <br /> <br /> <br />

## 우리집 식단표 서비스 소개

우리집 식단표는 한 달 식단표를 직접 제작할 수 있는 웹 서비스입니다. 🍽 <br />

<br />
서비스로 이동하기 👉 https://our-house-meal-table.web.app/

<br />

### ✍ 테스트 계정

| 아이디        | 비밀번호 |
| ------------- | -------- |
| test@test.com | 12345678 |

<br />

작성한 회고들 보러가기 📝

- [drag event를 이용한 메뉴 등록 + 🐞](https://velog.io/@bamzzi15/drag-event%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A9%94%EB%89%B4-%EB%93%B1%EB%A1%9D)
- [새로운 기능 구현](https://velog.io/@bamzzi15/%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
- [파이어베이스 적용하기](https://velog.io/@bamzzi15/%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [파이어베이스 로그인 구현 중... 🐞](https://velog.io/@bamzzi15/%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84-%EC%A4%91)
- [새로운 기능 구현, 그리고 열심히 삽질한 결과](https://velog.io/@bamzzi15/%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%97%B4%EC%8B%AC%ED%9E%88-%EC%82%BD%EC%A7%88%ED%95%9C-%EA%B2%B0%EA%B3%BC)
- [끝없는 v1.0.0 의 굴레](https://velog.io/@bamzzi15/%EB%81%9D%EC%97%86%EB%8A%94-v1.0.0-%EC%9D%98-%EA%B5%B4%EB%A0%88)

<br />
<br />

## 기능 소개

### 회원가입 / 로그인

- **Firebase Authentication을 이용**해 이메일, 구글 계정을 통해 로그인을 구현했습니다.
- 추후 아이디/비밀번호 찾기 기능과 다른 SNS 계정을 통한 로그인 구현 예정입니다.

| ![회원가입](https://github.com/minnyoung/our-house-meal-table/assets/118191378/b4f3927d-4b79-4799-9484-9222fcd32c15) | ![이메일로그인](https://github.com/minnyoung/our-house-meal-table/assets/118191378/31fa0d02-092c-4d95-95e4-c61a15ff81f5) | ![구글로그인](https://github.com/minnyoung/our-house-meal-table/assets/118191378/a49986c8-1b28-4850-8caa-d7f95f318a6b) |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 회원가입                                                                                                             | 로그인(이메일)                                                                                                           | 로그인(구글계정)                                                                                                       |

<br />
<br />

### 달력에 메뉴 등록하기

- **onDrag, onDrop 이벤트**를 적용해 오른쪽 메뉴 리스트에서 달력으로 **드래그 시 원하는 날짜에 원하는 메뉴를 등록**할 수 있습니다.
- 달력 내 날짜칸을 클릭하면 상세정보를 확인할 수 있는 **모달창을 구현**했습니다.
- **onClick 이벤트**를 적용해 상세정보창이 열려있을 경우, 클릭으로 더욱 편리하게 메뉴를 등록할 수 있습니다.
- 메인메뉴, 국/찌개류는 1개씩 등록 가능하며 반찬류는 3개까지 등록이 가능합니다.
- 달력 상단의 '메뉴 저장하기' 버튼을 누르면 서버에 식단표가 저장됩니다.

| ![녹화_2023_06_13_14_42_44_385](https://github.com/minnyoung/our-house-meal-table/assets/118191378/d1fab676-d495-4790-ad8b-699a617ec805) | ![녹화_2023_06_13_14_45_28_81](https://github.com/minnyoung/our-house-meal-table/assets/118191378/ebfadf96-775e-40b3-bef8-f66ed5248fa6) |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|                                                 메뉴를 달력으로 드래그하면 메뉴가 등록됨                                                 |                                                모달창에서도 메뉴 드래그 시 메뉴 등록가능                                                |
|![menuRegist_click](https://github.com/minnyoung/our-house-meal-table/assets/118191378/70d96b68-646d-4dd8-8b70-22795b85beab)    |
|                             모달창(상세정보창)이 열린 상태에서 <br />메뉴를 클릭하면 간편하게 메뉴등록 가능                              |

<br />
<br />

### 달력에 등록한 메뉴 삭제하기

- 날짜별 메뉴 전체삭제/메뉴 부분삭제, 월별 메뉴 전체삭제 기능이 있습니다.
- 날짜별 메뉴 전체삭제와 메뉴 부분삭제 기능은 달력 날짜칸 클릭 시 나타나는 모달을 통해서만 할 수 있습니다.

| ![녹화_2023_06_13_15_06_19_10](https://github.com/minnyoung/our-house-meal-table/assets/118191378/93cd781a-dc5b-4e82-99e7-2f98a9eccffb) | ![ezgif-5-6112504ca9](https://github.com/minnyoung/our-house-meal-table/assets/118191378/1c8c76ef-08fe-43b8-b38d-aa027477ba71) |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                                   날짜별 메뉴 전체삭제/메뉴 부분삭제                                                    |                                                       월별 메뉴 전체삭제                                                       |

<br />
<br />

### 메뉴 검색하기

- 오른쪽 메뉴 리스트에서 원하는 메뉴를 검색할 수 있습니다.
- 불필요한 렌더링을 방지하기 위해 debounce 기능을 이용해 300ms 마다 검색될 수 있도록 했습니다([custom hook 코드 보러가기](https://github.com/minnyoung/our-house-meal-table/blob/main/src/hooks/useDebounde.ts), [적용코드 보러가기](https://github.com/minnyoung/our-house-meal-table/blob/main/src/components/menuSection/SearchMenuBar.tsx#LL21C1-L22C1)).
- 검색한 메뉴도 달력으로 드래그 시 등록이 가능합니다.

| ![녹화_2023_06_13_15_12_16_604](https://github.com/minnyoung/our-house-meal-table/assets/118191378/6f09bd03-51ae-4949-9093-c317ee95600c) | ![녹화_2023_06_13_15_12_53_355](https://github.com/minnyoung/our-house-meal-table/assets/118191378/51ac4fad-f553-4412-83d4-810e5038c671) |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                메뉴 검색                                                                 |                                                         검색된 메뉴 달력에 등록                                                          |

<br />
<br />

### 추가기능

#### 서비스 이용방법 메뉴얼 구현

- 처음 서비스를 이용하는 사용자들을 위한 메뉴얼을 모달을 이용해 구현했습니다.
- 로그인 후 식단표 페이지에서 모달창으로 확인할 수 있으며, localStorage의 유효 기간이 없고 영구적으로 이용 가능한 특성을 이용해 `다시 보지 않기` checkbox를 구현했습니다.

#### 등록한 메뉴 레시피 검색페이지로 이동

- 날짜에 등록된 메뉴를 클릭하면 만개의 레시피 검색 페이지로 이동할 수 있게 구현했습니다.

#### 식단표를 이미지로 저장할 수 있는 기능

- **html2canvas 라이브러리**를 이용해 사용자가 만든 식단표를 이미지로 저장할 수 있는 기능을 구현했습니다.

| ![녹화_2023_06_13_16_55_13_976](https://github.com/minnyoung/our-house-meal-table/assets/118191378/63b79a38-d8b9-4e13-a436-549810f9248e) | ![ezgif-2-20ebe6b796](https://github.com/minnyoung/our-house-meal-table/assets/118191378/78d6a2ae-73e5-4bd1-adb4-a5ad82edc52d) |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                                         레시피 검색페이지로 이동                                                         |                                                    식단표 이미지 저장 기능                                                     |
| ![녹화_2023_06_28_22_46_34_395](https://github.com/minnyoung/our-house-meal-table/assets/118191378/28df3ec9-042a-4ca0-ad30-7fadc41fb103) |
|                                                       서비스 이용방법 메뉴얼 구현                                                        |

<br />
<br />

<!-- ### title

|   |  |  |
| ------- | -------- | -------- |
|  |  | | -->

<br /> <br />

## 핵심 기술

### Front-end

기술 스택 : React, TypeScript, Zustand, Styled-components

### Back-end

기술 스택 : Firebase

<br /> <br />

## 실행방법

```
// 프로젝트를 클론합니다.
git clone https://github.com/minnyoung/our-house-meal-table.git

// 클론한 프로젝트 내부로 이동합니다.
cd our-house-meal-table

// 의존 패키지를 설치합니다.
npm install

npm run start
```

파이어 베이스 사용을 위해 src 폴더 하위에 `.env` 파일을 추가합니다. `.env` 파일의 내용은 다음과 같습니다.

```
// firebase

REACT_APP_API_KEY = {FIREBASE_API_KEY}
REACT_APP_AUTH_DOMAIN = our-house-meal-table.firebaseapp.com
REACT_APP_PROJECT_ID = our-house-meal-table
REACT_APP_STORAGE_BUCKET = {FIREBASE_STORAGE_BUCKET}
REACT_APP_MESSGIN_ID = {FIREBASE_MESSGIN_ID}
REACT_APP_APP_ID = {FIREBASE_APP_ID}
```

## 폴더구조

```
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂calendar
 ┃ ┣ 📂element
 ┃ ┣ 📂icons
 ┃ ┗ 📂menuSection
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜firebase-config.js
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜router.tsx
 ┗ 📜setupTests.ts
```
