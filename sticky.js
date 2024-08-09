const setSections = function() {
  let sections = ['#934A5F', '#57648C', '#C2B4D6', '#934A5F', '#57648C', '#C2B4D6', '#934A5F', '#57648C', '#C2B4D6'];
  let fColor = ['#fff', '#fff', '#000','#000', '#fff', '#fff', '#000','#000', '#fff', '#fff', '#000','#000' ];

  const article = document.querySelector("article");
  sections.forEach((el, idx)=>{
    const HTML = `<section style="background: ${el}; color: ${fColor[idx]}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse perspiciatis consequatur vitae dignissimos alias iste exercitationem hic doloremque corrupti, nihil quae explicabo eligendi sed nobis? Reprehenderit ipsam ea quae.</section>`;
    article.insertAdjacentHTML('beforeend', HTML);
  });
}

const setStickyDummy = function() {
  document.querySelectorAll("header .sticky").forEach( a => {
    a.insertAdjacentHTML('afterend', a.outerHTML);
    const el = document.querySelectorAll(`.${a.classList[0]}`)[1];
    el.classList.add("dummy");
    el.classList.remove("sticky");
    el.innerHTML = "";
  })
}

const $logo = document.querySelector(".logo");
const $gnb = document.querySelector(".gnb");
const html = document.querySelector("html");
const body = document.querySelector("body");
let stickyPoint = $logo.offsetTop;

const scrollEvent = function() {
  setSticky();
  window.addEventListener("scroll", setSticky);
  window.addEventListener("touchmove", setSticky);
  window.addEventListener("touchstart", setSticky);
  body.addEventListener("touchstart", setSticky);
  body.addEventListener("touchmove", setSticky);
  html.addEventListener("touchstart", setSticky);
  html.addEventListener("touchmove", setSticky);
}

const stickyPointUpdate = function() {
  $logo.classList.remove("sticky");
  $gnb.classList.remove("sticky");

  stickyPoint = $logo.offsetTop;
  setSticky();
}

const setSticky = function() {
  if( scrollY < stickyPoint ){
    $logo.classList.remove("sticky");
    $gnb.classList.remove("sticky");
  } else {
    $logo.classList.add("sticky");
    $gnb.classList.add("sticky");
  }
}

const buttonEvent = function() {
  const $add = document.querySelector("#add");
  const $remove = document.querySelector("#remove");
  const $header = document.querySelector("header");
  const $gnbButton = document.querySelector("#rnb");
  const $nav = document.querySelector("nav");

  const addEvent = function() {
    const HTML = `<div class="news">banner</div>`
    $header.insertAdjacentHTML('afterbegin', HTML);
    stickyPointUpdate();
  }
  const removeEvent = function() {
    const banner = document.querySelector(".news");
    if ( banner ){
      banner.remove();
      stickyPointUpdate();
    }
  }
  const gnbOpen = function() {
    $nav.classList.add("open");
    $nav.classList.remove("close");
    body.classList.add("scroll-block");
  }
  const gnbClose = function() {
    $nav.classList.remove("open");
    $nav.classList.add("close");
    body.classList.remove("scroll-block");
  }

  $add.addEventListener("click", addEvent);
  $remove.addEventListener("click", removeEvent);
  $gnbButton.addEventListener("click", gnbOpen);
  $nav.addEventListener("click", gnbClose);
}

document.addEventListener("DOMContentLoaded", function() {
  setSections();
  setStickyDummy();
  scrollEvent();
  buttonEvent();
  stickyPointUpdate();
})
