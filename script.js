const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add("active");
}

});

});

const accordionBtns =
document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const content = btn.nextElementSibling;

if(content.style.display==="block"){
content.style.display="none";
}else{
content.style.display="block";
}

});

});
