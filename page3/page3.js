/* ==========================================
            ELEMENTS
========================================== */

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const shooting = document.getElementById("shooting-stars");
const confetti = document.getElementById("confetti");

const candles = document.querySelectorAll(".candle");

const message = document.getElementById("wishMessage");
const nextBtn = document.getElementById("nextBtn");

let blown = 0;

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

    star.style.animationDuration=
    (2+Math.random()*5)+"s";

    stars.appendChild(star);

}

/* ==========================================
          FLOATING HEARTS
========================================== */

const emojis=[
"💖",
"💕",
"💗",
"💜",
"🤍"
];

function createHeart(){

    const heart=document.createElement("span");

    heart.className="heart";

    heart.innerHTML=
    emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=
    (18+Math.random()*18)+"px";

    const duration=
    7000+Math.random()*4000;

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

            transform:"translateY(-120vh) translateX(-25px)",

            opacity:0

        }

    ],{

        duration:duration,

        easing:"linear"

    });

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },duration);

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

            transform:"translate(450px,250px) rotate(-35deg)",

            opacity:0

        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(shootingStar,7000);

/* ==========================================
            CONFETTI
========================================== */

function launchConfetti(){

    const colors=[
        "#FF8FC7",
        "#FFD166",
        "#CDB4FF",
        "#FFFFFF"
    ];

    for(let i=0;i<150;i++){

        const piece=document.createElement("span");

        piece.style.position="absolute";

        piece.style.width="8px";

        piece.style.height="12px";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.borderRadius="2px";

        piece.animate([

            {

                transform:"translateY(0) rotate(0deg)"

            },

            {

                transform:
                `translateY(${window.innerHeight+50}px)
                rotate(${Math.random()*720}deg)`

            }

        ],{

            duration:
            3000+Math.random()*2000,

            easing:"linear"

        });

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}

/* ==========================================
          CANDLE CLICK
========================================== */

candles.forEach(candle=>{

    candle.addEventListener("click",()=>{

        if(candle.classList.contains("off"))
        return;

        candle.classList.add("off");

        const flame=
        candle.querySelector(".flame");

        flame.remove();

        createSmoke(candle);

        blown++;

        if(blown===candles.length){

            launchConfetti();

            message.classList.add("show");

            nextBtn.classList.add("show");

        }

    });

});

/* ==========================================
              SMOKE
========================================== */

function createSmoke(candle){

    const smoke=document.createElement("div");

    smoke.innerHTML="💨";

    smoke.style.position="absolute";

    smoke.style.left=
    candle.offsetLeft+"px";

    smoke.style.top="-25px";

    smoke.style.fontSize="22px";

    smoke.animate([

        {

            transform:"translateY(0)",

            opacity:1

        },

        {

            transform:"translateY(-40px)",

            opacity:0

        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

    candle.appendChild(smoke);

    setTimeout(()=>{

        smoke.remove();

    },1200);

}

/* ==========================================
          NEXT PAGE
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

        window.location.href="../page4/page4.html";

    },900);

});