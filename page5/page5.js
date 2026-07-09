/* STARS */
const stars=document.getElementById("stars");

for(let i=0;i<200;i++){

const s=document.createElement("div");
s.style.position="absolute";
s.style.width="2px";
s.style.height="2px";
s.style.background="white";
s.style.left=Math.random()*100+"%";
s.style.top=Math.random()*100+"%";
s.style.opacity=Math.random();

stars.appendChild(s);

}

/* HEARTS */

const hearts=document.getElementById("hearts");

function heart(){

const h=document.createElement("div");

h.innerHTML="💖";
h.style.position="absolute";
h.style.left=Math.random()*100+"vw";
h.style.bottom="-20px";
h.style.fontSize="20px";

h.animate([

{transform:"translateY(0)",opacity:0},
{opacity:1,offset:.2},
{transform:"translateY(-120vh)",opacity:0}

],{

duration:7000,
easing:"linear"

});

hearts.appendChild(h);

setTimeout(()=>h.remove(),7000);

}

setInterval(heart,400);

/* RESTART */

document.getElementById("restartBtn")
.addEventListener("click",()=>{

window.location.href="../index.html";

});