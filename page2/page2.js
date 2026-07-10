/* ==========================================
            ELEMENTS
========================================== */

const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");

const typedText = document.getElementById("typedText");
const poem = document.getElementById("poem");
const nextBtn = document.getElementById("nextBtn");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const shooting = document.getElementById("shooting-stars");

let opened = false;

/* ==========================================
              STARS
========================================== */

for(let i=0;i<250;i++){

    const star=document.createElement("span");

    star.className="star";

    const size=Math.random()*2+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.animationDuration=
    (2+Math.random()*4)+"s";

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
"🤍",
"💞"
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
    7000+Math.random()*3000;

    heart.animate([

        {
            transform:"translateY(0) translateX(0)",
            opacity:0
        },

        {
            opacity:1,
            offset:.1
        },

        {
            transform:"translateY(-120vh) translateX(-30px)",
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

setInterval(createHeart,300);

/* ==========================================
           SHOOTING STARS
========================================== */

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*70+"vw";

    star.style.top=Math.random()*35+"vh";

    shooting.appendChild(star);

    star.animate([

        {

            transform:"translate(0,0) rotate(-35deg)",

            opacity:0

        },

        {

            opacity:1,

            offset:.15

        },

        {

            transform:"translate(500px,250px) rotate(-35deg)",

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
          LETTER MESSAGE
========================================== */

const message=`For My Special Person❤️,

Happy Birthday to the most beautiful girl in my life.
To my iron women 
you are not just a person 
you are a blessing for my life
you are the reason for my smile 
i just cant explain iron women how precious you are for me 
and i am glad that you are with me 
and in this special day of yours i wrote some lines for you`;

/* ==========================================
          TYPEWRITER
========================================== */

function typeLetter(){

    let i=0;

    typedText.innerHTML="";

    function typing(){

        if(i<message.length){

            typedText.innerHTML+=message.charAt(i);

            i++;

            typedText.scrollTop=
            typedText.scrollHeight;

            setTimeout(typing,35);

        }

        else{

            poem.classList.add("show");

            setTimeout(()=>{

                nextBtn.classList.add("show");

            },700);

        }

    }

    typing();

}

/* ==========================================
          FLIP CARD
========================================== */

flipBtn.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    card.classList.add("flip");

    setTimeout(()=>{

        typeLetter();

    },900);

});

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

        window.location.href="../page3/page3.html";

    },900);

});