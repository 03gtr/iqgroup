const boot=document.getElementById("boot");
const activate=document.getElementById("activate");
const identity=document.getElementById("identity");
const socials=document.getElementById("socials");
const cta=document.getElementById("servicesCta");
const strip=document.querySelector(".service-strip");
const scene=document.getElementById("scene");
const services=document.getElementById("servicesPage");
const back=document.getElementById("back");

window.addEventListener("load",()=>setTimeout(()=>boot.classList.add("hide"),950));

activate.addEventListener("click",()=>{
  activate.style.opacity="0";
  activate.style.pointerEvents="none";
  document.getElementById("xpsCard").style.animation="cardLock .7s ease both";
  identity.classList.add("show");
  setTimeout(()=>socials.classList.add("show"),250);
  setTimeout(()=>cta.classList.add("show"),420);
  setTimeout(()=>strip.classList.add("show"),560);
});

cta.addEventListener("click",()=>{
  scene.style.display="none";
  services.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
});
back.addEventListener("click",()=>{
  services.classList.remove("active");
  scene.style.display="";
  window.scrollTo({top:0,behavior:"smooth"});
});
