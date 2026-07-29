// =====================================
// MARKed for MAE V2
// =====================================

// Wedding Date
const weddingDate = new Date("April 27, 2027 15:00:00").getTime();

const timer = document.getElementById("timer");

function countdown(){

    if(!timer) return;

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        timer.innerHTML = "<h2>💍 Today is our Wedding Day!</h2>";

        return;

    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    timer.innerHTML = `
        <div class="time-box">
            <h3>${days}</h3>
            <p>Days</p>
        </div>

        <div class="time-box">
            <h3>${hours}</h3>
            <p>Hours</p>
        </div>

        <div class="time-box">
            <h3>${minutes}</h3>
            <p>Minutes</p>
        </div>

        <div class="time-box">
            <h3>${seconds}</h3>
            <p>Seconds</p>
        </div>
    `;
}

countdown();
setInterval(countdown,1000);

// =====================================
// ENTER THE GARDEN
// =====================================

const enterBtn = document.getElementById("enterBtn");
const opening = document.getElementById("opening-screen");

if(enterBtn && opening){

    enterBtn.addEventListener("click",()=>{

        opening.style.opacity="0";
        opening.style.transition="1s";

        setTimeout(()=>{

            opening.style.display="none";

        },1000);

    });

}

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
