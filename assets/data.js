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

  /* 소식 — tag: "news"(소식) | "award"(수상) | "talk"(발표) | "paper"(논문) */
  news: [
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
    { name: { ko: "홍길동", en: "Gildong Hong" }, group: "phd",
      role: { ko: "박사과정 (예시)", en: "Ph.D. student (example)" },
      topic: { ko: "연구 주제", en: "Research topic" }, photo: "" },
    { name: { ko: "김연구", en: "Yeongu Kim" }, group: "ms",
      role: { ko: "석사과정 (예시)", en: "M.S. student (example)" },
      topic: { ko: "연구 주제", en: "Research topic" }, photo: "" },
  ],

  /* 논문 — 최신 논문을 위에 추가 */
  publications: [
    { year: 2026, authors: "Author A, Author B, Jay*", title: "Paper title (example — replace with your publication)",
      journal: "Journal Name", doi: "" },
  ],
};
