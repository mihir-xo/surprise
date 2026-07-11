/* ==========================================
            ELEMENTS
========================================== */

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const shooting = document.getElementById("shooting-stars");
const nextBtn = document.getElementById("nextBtn");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {

    canvas.width = innerWidth;
    canvas.height = innerHeight;

});

/* ==========================================
            STARS
========================================== */

for(let i=0;i<220;i++){

    const star=document.createElement("span");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(2+Math.random()*5)+"s";

    stars.appendChild(star);

}

/* ==========================================
          FLOATING HEARTS
========================================== */

const emojis=["💖","💕","💗","💜","🤍"];

function createHeart(){

    const heart=document.createElement("span");

    heart.className="heart";

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-40px";
    heart.style.fontSize=(16+Math.random()*18)+"px";

    const duration=7000+Math.random()*4000;

    heart.animate([

        {
            transform:"translateY(0)",
            opacity:0
        },

        {
            opacity:1,
            offset:.1
        },

        {
            transform:"translateY(-120vh) translateX(-20px)",
            opacity:0
        }

    ],{

        duration:duration,
        easing:"linear"

    });

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),duration);

}

setInterval(createHeart,350);

/* ==========================================
        SHOOTING STAR
========================================== */

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*60+"vw";
    star.style.top=Math.random()*35+"vh";

    shooting.appendChild(star);

    star.animate([

        {
            transform:"translate(0,0) rotate(-35deg)",
            opacity:0
        },

        {
            opacity:1,
            offset:.2
        },

        {
            transform:"translate(500px,250px) rotate(-35deg)",
            opacity:0
        }

    ],{

        duration:1200,
        easing:"ease-out"

    });

    setTimeout(()=>star.remove(),1200);

}

setInterval(shootingStar,6000);

/* ==========================================
            FIREWORKS
========================================== */

const colors=[

"#FF8FC7",
"#FFD166",
"#CDB4FF",
"#FFFFFF"

];

let particles=[];

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.color=color;

        this.radius=2+Math.random()*2;

        this.speed=Math.random()*5+2;

        this.angle=Math.random()*Math.PI*2;

        this.life=100;

    }

    update(){

        this.x+=Math.cos(this.angle)*this.speed;

        this.y+=Math.sin(this.angle)*this.speed;

        this.speed*=0.98;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}

function explode(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height*0.6+50;

    const color=colors[Math.floor(Math.random()*colors.length)];

    for(let i=0;i<90;i++){

        particles.push(new Particle(x,y,color));

    }

}

setInterval(explode,900);

/* ==========================================
        ANIMATION LOOP
========================================== */

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

/* ==========================================
        PAGE TRANSITION
========================================== */

nextBtn.addEventListener("click",()=>{

    document.body.animate([

        {

            opacity:1,
            transform:"scale(1)"

        },

        {

            opacity:0,
            transform:"scale(1.05)"

        }

    ],{

        duration:900,
        fill:"forwards"

    });

    setTimeout(()=>{

        window.location.href="../page5/page5.html";

    },900);

});