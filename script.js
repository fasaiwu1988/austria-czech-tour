/* 捲動動畫 */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* Accordion */

const accordionBtns =
document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const content =
btn.nextElementSibling;

if(content.style.display==="block"){

content.style.display="none";

}else{

content.style.display="block";

}

});

});
