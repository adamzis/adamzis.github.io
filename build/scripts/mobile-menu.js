export default()=>{const e=document.querySelector("#mobile-menu-toggle"),l=document.querySelector("ul#nav-menu");e.addEventListener("click",()=>{"flex"===l.style.display?l.style.display="none":l.style.display="flex"},!1),window.addEventListener("resize",()=>{window.innerWidth>=800&&(l.style.display=null)},!1)};