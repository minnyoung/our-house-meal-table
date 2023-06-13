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

<!-- 목차 -->
  <br /> <br />  <br /> <br />
## 우리집 식단표 서비스 바로가기

> 우리집 식단표는 한 달 식단표를 직접 제작할 수 있는 웹 서비스입니다. 🍽 <br />
> 현재 제작중입니다!

제작 중인 서비스 구경하기 👉 https://our-house-meal-table.web.app/

### ✍ 테스트 계정
| 아이디  | 비밀번호 |
| ------- | -------- |
| test@test.com | 12345678 |

<br />

## 데모영상

### 회원가입 / 로그인
- 이메일, 구글 계정을 통해 로그인을 할 수 있습니다.
- 추후 아이디/비밀번호 찾기 기능과 다른 SNS 계정을 통한 로그인 구현 예정입니다.

| ![회원가입](https://github.com/minnyoung/our-house-meal-table/assets/118191378/b4f3927d-4b79-4799-9484-9222fcd32c15)  | ![이메일로그인](https://github.com/minnyoung/our-house-meal-table/assets/118191378/31fa0d02-092c-4d95-95e4-c61a15ff81f5) | ![구글로그인](https://github.com/minnyoung/our-house-meal-table/assets/118191378/a49986c8-1b28-4850-8caa-d7f95f318a6b) | 
| ------- | -------- | -------- |
| 회원가입 | 로그인(이메일) | 로그인(구글계정) |



<br />
<br />

### 달력에 메뉴 등록하기
- 오른쪽 메뉴 리스트에서 달력으로 **드래그 시 원하는 날짜에 원하는 메뉴를 등록**할 수 있습니다.
- 달력 내 날짜칸을 클릭하면 상세정보를 확인할 수 있는 **모달창을 구현**했습니다.
- 메인메뉴, 국/찌개류는 1개씩 등록 가능하며 반찬류는 3개까지 등록이 가능합니다.
- 달력 상단의 '메뉴 저장하기' 버튼을 누르면 서버에 식단표가 저장됩니다. 
- 메뉴 등록 시 사용하는 드래그 이벤트가 불편하다는 의견이 있어 클릭 시 메뉴가 등록될 수 있도록 수정 예정입니다. 

|![녹화_2023_06_13_14_42_44_385](https://github.com/minnyoung/our-house-meal-table/assets/118191378/d1fab676-d495-4790-ad8b-699a617ec805)  | ![녹화_2023_06_13_14_45_28_81](https://github.com/minnyoung/our-house-meal-table/assets/118191378/ebfadf96-775e-40b3-bef8-f66ed5248fa6) | 
| :-------: | :-------: | 
| 메뉴를 달력으로 드래그하면 메뉴가 등록됨 | 모달창에서도 메뉴 드래그 시 메뉴 등록가능 |

<br />
<br />


### 달력에 등록한 메뉴 삭제하기
- 날짜별 메뉴 전체삭제/메뉴 부분삭제, 월별 메뉴 전체삭제 기능이 있습니다.
- 날짜별 메뉴 전체삭제와 메뉴 부분삭제 기능은 달력 날짜칸 클릭 시 나타나는 모달을 통해서만 할 수 있습니다. 

| ![녹화_2023_06_13_15_06_19_10](https://github.com/minnyoung/our-house-meal-table/assets/118191378/93cd781a-dc5b-4e82-99e7-2f98a9eccffb) | ![ezgif-5-6112504ca9](https://github.com/minnyoung/our-house-meal-table/assets/118191378/1c8c76ef-08fe-43b8-b38d-aa027477ba71) |
| :--------: | :--------: |
| 날짜별 메뉴 전체삭제/메뉴 부분삭제 | 월별 메뉴 전체삭제 |

<br />
<br />


### 메뉴 검색하기
- 오른쪽 메뉴 리스트에서 원하는 메뉴를 검색할 수 있습니다. 
- 불필요한 렌더링을 방지하기 위해 debounce 기능을 이용해 500ms 마다 검색될 수 있도록 했습니다([custom hook 코드 보러가기](https://github.com/minnyoung/our-house-meal-table/blob/main/src/hooks/useDebounde.ts), [적용코드 보러가기](https://github.com/minnyoung/our-house-meal-table/blob/main/src/components/menuSection/SearchMenuBar.tsx#LL21C1-L22C1)). 
- 검색한 메뉴도 달력으로 드래그 시 등록이 가능합니다.

| ![녹화_2023_06_13_15_12_16_604](https://github.com/minnyoung/our-house-meal-table/assets/118191378/6f09bd03-51ae-4949-9093-c317ee95600c) |![녹화_2023_06_13_15_12_53_355](https://github.com/minnyoung/our-house-meal-table/assets/118191378/51ac4fad-f553-4412-83d4-810e5038c671)| 
| :-------: | :--------: | 
| 메뉴 검색 | 검색된 메뉴 달력에 등록 |


<!-- ### 등록한 메뉴 레시피 검색페이지로 이동 

|   |  |  |
| ------- | -------- | -------- |
|  |  | | -->

  <br /> <br />

## 프로젝트 구조
작성 중

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

파이어 베이스 사용을 위해 src 폴더 하위에 .env 파일을 추가합니다. .env 파일의 내용은 다음과 같습니다.
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
 ┃ ┣ 📜authApis.ts
 ┃ ┗ 📜menuListApis.ts
 ┣ 📂assets
 ┃ ┗ 📜test.txt
 ┣ 📂components
 ┃ ┣ 📂calendar
 ┃ ┃ ┣ 📜Calendar.tsx
 ┃ ┃ ┣ 📜CalendarBody.tsx
 ┃ ┃ ┣ 📜CalendarHeader.tsx
 ┃ ┃ ┗ 📜CalendarWeekDays.tsx
 ┃ ┣ 📂element
 ┃ ┃ ┣ 📜CalaendarHeaderButton.tsx
 ┃ ┃ ┗ 📜ModalMenuDeleteButton.tsx
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜ClearIcon.tsx
 ┃ ┃ ┣ 📜DeleteIcon.tsx
 ┃ ┃ ┣ 📜SaveImageIcon.tsx
 ┃ ┃ ┗ 📜SaveMenuListIcon.tsx
 ┃ ┣ 📂menuSection
 ┃ ┃ ┣ 📜MainMenu.tsx
 ┃ ┃ ┣ 📜MenuLayout.tsx
 ┃ ┃ ┣ 📜SearchedItem.tsx
 ┃ ┃ ┣ 📜SearchedList.tsx
 ┃ ┃ ┣ 📜SearchMenuBar.tsx
 ┃ ┃ ┣ 📜SideMenu.tsx
 ┃ ┃ ┗ 📜Soup.tsx
 ┃ ┣ 📜Firebase.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜MenuModal.tsx
 ┃ ┣ 📜Navbar.tsx
 ┃ ┣ 📜SnsLoginButtons.tsx
 ┃ ┗ 📜UserMenuText.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useCalendarDays.ts
 ┃ ┣ 📜useDebounde.ts
 ┃ ┣ 📜useMakeCalendarFunction.ts
 ┃ ┣ 📜useMakeEmail.ts
 ┃ ┣ 📜useMakeMenuListFunction.ts
 ┃ ┣ 📜useMakePassWord.ts
 ┃ ┣ 📜useResetMenu.ts
 ┃ ┗ 📜useUserAuthFunction.ts
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜MealTable.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂store
 ┃ ┣ 📜menuListStore.ts
 ┃ ┗ 📜userMenuStore.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📂types
 ┃ ┗ 📜SearchResultType.ts
 ┣ 📂utils
 ┃ ┣ 📜captureCalendar.ts
 ┃ ┗ 📜uid.ts
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
