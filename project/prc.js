function changeAboutMyText(){
   const aboutMeText =["About me","Flowerful Expressions","Online Available"];
   const typeSpeed=100;
   const ersSpeed=50;
   const puseTime=1500;
   const myElement=document.querySelector(".about-me");

var modal= document.querySelector("#id01");
var modal2=document.querySelector(".container");
let log= document.getElementById("ask");
let sign=document.querySelector(".sign");
let body=document.querySelector("#main-cont");
let cncl=document.querySelector(".cancl");
let cncl2=document.querySelector(".cancl2");
let close=document.querySelector(".close")
let login="unsubmited";
log.addEventListener("click",()=>{

    if(login==="unsubmited"){
        body.classList.add("blur");
    modal.style.display="block";
     login="submited";  
    }
    else{
           body.classList.remove("blur");
        modal.style.display="none";
           login="unsubmited";
    }
});
 close.addEventListener("click",()=>{
    modal.style.display="none";

   body.classList.remove("blur");
});

cncl2.addEventListener("click",()=>{
   
    modal2.style.display="none";
});
cncl.addEventListener("click",()=>{
    modal.style.display="none";
 
});
let signIN=false;
sign.addEventListener("click",()=>{
    if(signIN===false){
        modal2.style.display="block";
        signIN=true;
    }
    else{
        modal2.style.display="none";
        signIN=false;
    }
    
});

/*----------menu bar---------------*/
let menu=document.getElementById("menu");
let menuCont=document.querySelector(".menu-container");
let cncl3=document.querySelector(".cancl3");
let menuBar="closed";
menu.addEventListener("click",()=>{
    if(menuBar="closed"){
        menuCont.style.display="block";
        menuBar="open";
    }
    else{
         menuCont.style.display="none";
         menuBar="closed";
    }
});
cncl3.addEventListener("click",()=>{
   
    menuCont.style.display="none";
});

let textIndex=0;
let charIndex=0;
let isDeleting=false;
function type(){
    const currentText=aboutMeText[textIndex];
    if(!isDeleting && charIndex < currentText.length)
        {
myElement.textContent+=currentText[charIndex];
charIndex++;
setTimeout(type,typeSpeed);
    
}
else if(isDeleting && charIndex > 0)
{
    myElement.textContent=currentText.substring(0,charIndex-1);
    charIndex--;
    setTimeout(type, ersSpeed);

}
else{
    isDeleting=!isDeleting;
    if(!isDeleting){
        textIndex=(textIndex+1)% aboutMeText.length;
    }
    setTimeout(type,puseTime);
}
}
type();

}
changeAboutMyText();
let body=document.querySelector("body");

let moon=document.querySelector(".fa-moon");
moon.addEventListener("click",()=>{
    moon.classList.toggle("fa-moon");
    moon.classList.toggle("fa-sun");
    body.classList.toggle("dark-mode");
});
/*
let body=document.querySelector("body");
let menu=document.querySelector("#menu");
let mode="light-mode";
darkMode.addEventListener("click",()=>{ 
   if(mode==="light-mode"){
    mode="darkMode";
    body.style.backgroundColor=" rgba(26, 24, 25, 1)";
        darkMode.src="sun.jpg"; 
        body.style.color="white";
        menu.style.color="white";
   }
   else{
    mode="light-mode";
    body.style.backgroundColor="white";
    darkMode.src="moon.jpg"
    body.style.color="black";
     menu.style.color="black";
   }
         
});*/
/*----------slides-----------*/



let slidsIndex = 1;
slideShow(slidsIndex);
 
function plusSlide(n){slideShow(slidsIndex += n);}

function currntSlide(n){slideShow(slidsIndex = n);}
   
function slideShow(n){
    let i;
let slides=document.querySelectorAll(".img");
let dots=document.querySelectorAll(".dot1");
    if(n > slides.length){
        slidsIndex = 1;
    }
    if(n < 1){
        slidsIndex=slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";    
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }

  slides[slidsIndex-1].style.display = "block";
  dots[slidsIndex-1].className += " active";
    
    
}