const envelope = document.querySelector(".envelope");
const openBtn = document.getElementById("openBtn");
const wrapper = document.getElementById("envelopeWrapper");
const card = document.getElementById("mainCard");
const lines = document.querySelectorAll(".message p");
const hearts = document.querySelector(".hearts");
const petalsBox = document.querySelector(".petals");
const pocoyo = document.getElementById("pocoyo");

const hadiah = document.getElementById("hadiah");
const choco = document.querySelector(".choco");

openBtn.onclick = () => {
    openBtn.classList.add("open");

    setTimeout(()=>{
        envelope.classList.add("open");

        setTimeout(()=>{
            wrapper.style.display="none";
            card.classList.add("show");

            lines.forEach((el,i)=>{
                setTimeout(()=>{
                    el.style.opacity=1;
                    el.style.transform="translateY(0)";
                },i*600);
            });

            setTimeout(()=>{
                hadiah.classList.remove("hidden");
                choco.style.transform="scale(1.2)";
                setTimeout(()=>{
                    choco.style.transform="scale(1)";
                },200);
            },2000);

            startHearts();
            startPocoyoThrow();

        },900);
    },600);
};


function startHearts(){
    setInterval(()=>{
        const h=document.createElement("span");
        h.innerHTML="💗";
        h.style.left=Math.random()*100+"vw";
        h.style.fontSize=(15+Math.random()*20)+"px";
        h.style.animationDuration=(3+Math.random()*4)+"s";
        hearts.appendChild(h);
        setTimeout(()=>h.remove(),7000);
    },400);
}

function startPocoyoThrow(){
    setInterval(()=>{
        cuteThrow();
    },1500);
}

function cuteThrow(){
    pocoyo.classList.add("throw");

    setTimeout(()=>{
        pocoyo.classList.remove("throw");
    },500);

    for(let i=0;i<2;i++){
        createPetal();
    }
}

function createPetal(){
    const p=document.createElement("span");
    p.innerHTML="🌸";
    p.classList.add("petal");

    p.style.left=(48+Math.random()*6)+"%";
    p.style.fontSize=(18+Math.random()*10)+"px";
    p.style.animationDuration=(5+Math.random()*3)+"s";

    petalsBox.appendChild(p);

    setTimeout(()=>p.remove(),8000);
}
