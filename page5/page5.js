/*==========================================
            STARS
==========================================*/

const stars = document.getElementById("stars");

for(let i = 0; i < 250; i++){

    const star = document.createElement("div");

    const size = Math.random() * 3 + 1;

    star.style.position = "absolute";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.borderRadius = "50%";
    star.style.background = "white";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animation = `twinkle ${2 + Math.random() * 5}s infinite`;

    stars.appendChild(star);

}

/*==========================================
            TWINKLE ANIMATION
==========================================*/

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

    0%,100%{

        opacity:.2;
        transform:scale(1);

    }

    50%{

        opacity:1;
        transform:scale(1.8);

    }

}

`;

document.head.appendChild(style);

/*==========================================
            FLOATING HEARTS
==========================================*/

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    const emojis = ["💖","💕","💗","❤️","💞"];

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.position = "absolute";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.opacity = ".9";

    hearts.appendChild(heart);

    heart.animate(

    [

        {

            transform:"translateY(0) rotate(0deg)",

            opacity:0

        },

        {

            opacity:1,

            offset:.2

        },

        {

            transform:`translateY(-120vh) translateX(${Math.random()*120-60}px) rotate(${Math.random()*360}deg)`,

            opacity:0

        }

    ],

    {

        duration:7000 + Math.random()*3000,

        easing:"linear"

    }

    );

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

/*==========================================
            SCROLL REVEAL
==========================================*/

const reveals = document.querySelectorAll(

".hero,.hero-photo,.card,.timeline-item,.letter,.quote,.ending"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition="all .8s ease";

observer.observe(item);

});

/*==========================================
            CARD PARALLAX
==========================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = (x / rect.width - .5) * 10;

const rotateX = -(y / rect.height - .5) * 10;

card.style.transform =

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*==========================================
        HERO IMAGE ZOOM
==========================================*/

// const hero = document.querySelector(".hero-photo img");

// window.addEventListener("scroll",()=>{

// const value = window.scrollY * .0004;

// hero.style.transform = `scale(${1 + value})`;

// });

/*==========================================
        CONFETTI
==========================================*/

function confetti(){

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="8px";
        c.style.height="14px";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.borderRadius="3px";

        const colors=[

        "#ff7db8",

        "#ffd166",

        "#ffffff",

        "#d7b5ff",

        "#ff99cc"

        ];

        c.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        document.body.appendChild(c);

        c.animate(

        [

        {

        transform:"translateY(0) rotate(0deg)"

        },

        {

        transform:

        `translateY(${window.innerHeight+100}px)
        translateX(${Math.random()*300-150}px)
        rotate(${Math.random()*1080}deg)`

        }

        ],

        {

        duration:3500+Math.random()*2500,

        easing:"ease-out"

        }

        );

        setTimeout(()=>{

        c.remove();

        },6000);

    }

}

window.addEventListener("load",()=>{

setTimeout(confetti,600);

});

/*==========================================
        REPLAY BUTTON
==========================================*/

document

.getElementById("restartBtn")

.addEventListener("click",()=>{

window.location.href="../index.html";

});