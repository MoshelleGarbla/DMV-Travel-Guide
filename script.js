const hamburger=document.querySelector(".hamgurger");
const navlinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle('open');
    links.forEach((link)=>{
        link.classList.toggle("fade")
    })
})






