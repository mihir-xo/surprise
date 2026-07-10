const starsContainer = document.getElementById("stars");
const heartsContainer = document.getElementById("hearts");
const shootingContainer = document.getElementById("shooting-stars");
const button = document.getElementById("giftBtn");

/* ==========================
        RANDOM STARS
========================== */

for(let i=0;i<220;i++){

    const star=document.createElement("span");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.animationDuration=
        (2+Math.random()*5)+"s";

    star.style.animationDelay=
        Math.random()*5+"s";

    starsContainer.appendChild(star);

}

/* ==========================
      FLOATING HEARTS
========================== */

const emojis=[
    "💗",
    "💖",
    "💕",
    "💞",
    "💜",
    "🤍"
];

function createHeart(){

    const heart=document.createElement("span");

    heart.className="heart";

    heart.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=
        Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=
        (16+Math.random()*18)+"px";

    const duration=
        7+Math.random()*6;

    heart.animate([

        {
            transform:"translateY(0px) translateX(0px) rotate(0deg)",
            opacity:0
        },

        {
            opacity:1,
            offset:.1
        },

        {
            transform:"translateY(-50vh) translateX(-20px) rotate(180deg)",
            offset:.5
        },

        {
            transform:"translateY(-120vh) translateX(20px) rotate(360deg)",
            opacity:0
        }

    ],{

        duration:duration*1000,
        easing:"linear"

    });

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },duration*1000);

}

setInterval(createHeart,250);

/* ==========================
      SHOOTING STARS
========================== */

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=
        Math.random()*70+"vw";

    star.style.top=
        Math.random()*40+"vh";

    shootingContainer.appendChild(star);

    star.animate([

        {
            transform:"translate(0,0) rotate(-35deg)",
            opacity:0
        },

        {
            opacity:1,
            offset:.1
        },

        {
            transform:"translate(450px,250px) rotate(-35deg)",
            opacity:0
        }

    ],{

        duration:1300,
        easing:"ease-out"

    });

    setTimeout(()=>{

        star.remove();

    },1300);

}

setInterval(shootingStar,9000);

/* ==========================
      BUTTON EFFECT
========================== */

button.addEventListener("mouseenter",()=>{

    button.animate([

        {
            transform:"translateY(0)"
        },

        {
            transform:"translateY(-5px)"
        }

    ],{

        duration:250

    });

});

/* ==========================
      PAGE TRANSITION
========================== */

button.addEventListener("click",()=>{

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

        window.location.href="../page2/page2.html";

    },900);

});