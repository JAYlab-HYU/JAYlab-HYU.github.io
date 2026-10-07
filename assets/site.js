(function(){
  const NAV=[["index.html","홈","Home"],["research.html","연구","Research"],["pi.html","PI","PI"],["team.html","멤버","Members"],["publications.html","논문","Publications"],["news.html","소식","News"],["join.html","모집","Join"],["contact.html","연락처","Contact"]];
  const TAGS={news:["소식","News"],award:["수상","Award"],talk:["발표","Talk"],paper:["논문","Paper"]};
  const GROUPS=[["phd","박사과정","Ph.D. Students"],["ms","석사과정","M.S. Students"],["intern","학부연구생","Undergraduate Researchers"],["staff","연구원","Researchers"],["alumni","졸업생","Alumni"]];
  const $=s=>document.querySelector(s);
  const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const bi=(o)=>`<span class="ko">${esc(o.ko)}</span><span class="en">${esc(o.en)}</span>`;
  const b2=(k,e)=>bi({ko:k,en:e});

  // language
  let lang="ko";
  try{lang=localStorage.getItem("lang")||((navigator.language||"ko").startsWith("ko")?"ko":"en")}catch(e){}
  function setLang(l){lang=l;document.documentElement.dataset.lang=l;document.documentElement.lang=l;
    try{localStorage.setItem("lang",l)}catch(e){}
    document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));}
  document.documentElement.dataset.lang=lang;

  // header / footer
  const here=(location.pathname.split("/").pop()||"index.html");
  $("#header").outerHTML=`<a class="skip" href="#main">본문 바로가기</a><header class="site"><div class="wrap">
    <a class="brand" href="index.html">Jay Lab<small>HANYANG UNIVERSITY</small></a>
    <button class="menu-btn" aria-label="Menu">☰</button>
    <nav class="main">${NAV.map(n=>`<a href="${n[0]}" class="${n[0]===here?"on":""}">${b2(n[1],n[2])}</a>`).join("")}</nav>
    <div class="lang"><button data-l="ko">KO</button><button data-l="en">EN</button></div></div></header>`;
  $("#footer").outerHTML=`<footer class="site"><div class="wrap">
    <b>Jay Lab</b> · ${b2("물리약학 연구실","Advanced Drug Delivery & Industrial Pharmacy")}<br>
    ${b2("한양대학교 약학대학","College of Pharmacy, Hanyang University")}
    <div class="c">© ${new Date().getFullYear()} Jay Lab. All rights reserved.</div></div></footer>`;
  document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
  $(".menu-btn").onclick=()=>$("nav.main").classList.toggle("open");
  setLang(lang);

  const fmt=d=>{const [y,m,dd]=d.split("-").map(Number);
    return b2(`${y}년 ${m}월 ${dd}일`,new Date(y,m-1,dd).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}));};

  // news
  const nl=$("#news-list");
  if(nl){const lim=+nl.dataset.limit||999;
    const items=[...SITE.news].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,lim);
    nl.innerHTML=items.map(n=>{const t=TAGS[n.tag]||TAGS.news;
      return `<li><div class="meta"><span class="tag ${esc(n.tag)}">${b2(t[0],t[1])}</span>${fmt(n.date)}</div>
      <h3>${bi(n.title)}</h3><p>${bi(n.body)}</p>
      ${(n.images&&n.images.length)?`<div class="pics">${n.images.map(i=>`<img src="${esc(i)}" alt="" loading="lazy">`).join("")}</div>`:""}</li>`}).join("");}

  // members
  const ml=$("#members");
  if(ml){ml.innerHTML=GROUPS.map(g=>{const ms=SITE.members.filter(m=>m.group===g[0]);if(!ms.length)return"";
    return `<h2>${b2(g[1],g[2])}</h2><div class="people">${ms.map(m=>`<div class="person">
      <div class="ph">${m.photo?`<img src="${esc(m.photo)}" alt="">`:esc((m.name.en||"?")[0])}</div>
      <b>${bi(m.name)}</b><span>${bi(m.role)}</span><span>${bi(m.topic)}</span></div>`).join("")}</div>`}).join("");}

  // publications
  const pl=$("#pubs");
  if(pl){const ys=[...new Set(SITE.publications.map(p=>p.year))].sort((a,b)=>b-a);
    pl.innerHTML=ys.map(y=>`<h2 class="year">${y}</h2><ol class="pubs">${SITE.publications.filter(p=>p.year===y).map(p=>
      `<li><span class="t">${esc(p.title)}</span><br>${esc(p.authors)}<br><span class="j">${esc(p.journal)}</span>${p.doi?` · <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">doi:${esc(p.doi)}</a>`:""}</li>`).join("")}</ol>`).join("");}

  // slider
  const sl=$("#slider");
  if(sl){if(!SITE.slides.length){sl.remove();}else{
    sl.innerHTML=`<div class="frame">${SITE.slides.map((s,i)=>`<img src="${esc(s)}" alt="" class="${i?"":"on"}">`).join("")}</div>
      <button class="prev" aria-label="Previous">‹</button><button class="next" aria-label="Next">›</button>`;
    const im=sl.querySelectorAll("img");let k=0;
    const go=d=>{im[k].classList.remove("on");k=(k+d+im.length)%im.length;im[k].classList.add("on")};
    sl.querySelector(".prev").onclick=()=>go(-1);sl.querySelector(".next").onclick=()=>go(1);
    if(im.length>1)setInterval(()=>go(1),5000);}}
})();
