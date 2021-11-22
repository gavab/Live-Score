//sidebar open close

let menuOpenBtn=document.querySelector(".navbar .bi-grid-3x3-gap");
let menuCloseBtn=document.querySelector(".nav-links .bi-x-lg");
let navLinks=document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click",()=>{
    navLinks.style.left="0";
});

menuCloseBtn.addEventListener("click",()=>{
    navLinks.style.left="-100%";
});

//sidebar submenu open



let football_arrow=document.querySelector(".football-arrow");
let basketball_arrow=document.querySelector(".basketball-arrow");
let baseball_arrow=document.querySelector(".baseball-arrow");
let hockey_arrow=document.querySelector(".hockey-arrow");
let handball_arrow=document.querySelector(".handball-arrow");

football_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show1");
});

basketball_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show2");
});

baseball_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show3");
});

hockey_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show4");
});

handball_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show5");
});

let football_Tables_arrow=document.querySelector(".football-table-arrow");
let basketball_Tables_arrow=document.querySelector(".basketball-table-arrow");
let baseball_Table_arrow=document.querySelector(".baseball-table-arrow");
let hockey_Tables_arrow=document.querySelector(".hockey-table-arrow");
let handball_Tables_arrow=document.querySelector(".handball-table-arrow");


football_Tables_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show6");
});

basketball_Tables_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show7");
});

baseball_Table_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show8");
});

hockey_Tables_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show9");
});

handball_Tables_arrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show10");
});