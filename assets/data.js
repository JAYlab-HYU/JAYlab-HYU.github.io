/* ==========================================================
   Jay Lab 홈페이지 내용 파일 — 소식/구성원/논문은 이 파일만 고치면 됩니다.
   · 항목을 추가할 때는 { ... } 한 덩어리를 복사해 맨 위에 붙이고 내용을 바꾸세요.
   · 따옴표(" ")와 쉼표(,)를 지우지 않도록 주의하세요.
   · 사진은 images 폴더에 올린 뒤 "images/파일이름.jpg" 형태로 적습니다.
   ========================================================== */
const SITE = {

  /* 홈 화면 슬라이드 사진 (비워 두면 슬라이드가 표시되지 않음) */
  slides: [
    // "images/home-1.jpg",
    // "images/home-2.jpg",
  ],

  /* 소식 — tag: "news"(소식) | "notice"(공지) | "award"(수상) | "talk"(발표) | "paper"(논문)
     · 본문에서 줄을 바꾸려면 \\n 을 넣습니다.  · link: "주소" 를 넣으면 "자세히 보기" 링크가 붙습니다(없으면 생략). */
  news: [
    {
      date: "2026-10-08",
      tag: "notice",
      title: { ko: "2027학년도 전기 특별전형 일반대학원 신입학 모집요강 공고",
               en: "Graduate School Admissions for Spring 2027 (Special Admission)" },
      body:  { ko: "원서접수기간: 2026. 10. 12.(월) 10:00 ~ 10. 15.(목) 17:00\n서류접수기간: 2026. 10. 12.(월) 10:00 ~ 10. 21.(수) 17:00",
               en: "Online application: Oct 12 (Mon) 10:00 – Oct 15 (Thu) 17:00, 2026\nDocument submission: Oct 12 (Mon) 10:00 – Oct 21 (Wed) 17:00, 2026" },
      link: "https://pharmacy.hanyang.ac.kr/front/information/notice/notice-view?id=1865",
      images: [],
    },
    {
      date: "2026-10-07",
      tag: "news",
      title: { ko: "Jay Lab 홈페이지 개설", en: "Jay Lab website launched" },
      body:  { ko: "연구실 홈페이지를 열었습니다. 연구 소식과 모집 안내를 이곳에서 전합니다.",
               en: "Our lab website is now online. Research news and openings will be posted here." },
      images: [],
    },
  ],

  /* 구성원 — group: "phd" | "ms" | "intern" | "staff" | "alumni" */
  members: [
  
  ],

  /* 논문 — 최신 논문을 위에 추가 */
  publications: [
    { year: 2026, authors: "Author A, Author B, Jay*", title: "Paper title (example — replace with your publication)",
      journal: "Journal Name", doi: "" },
  ],
};
