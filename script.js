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
const leftGate = document.querySelector(".left-gate");
const rightGate = document.querySelector(".right-gate");
const welcomeCard = document.querySelector(".welcome-card");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        welcomeCard.classList.add("fade");

        leftGate.classList.add("open");

        rightGate.classList.add("open");

        setTimeout(() => {

            opening.classList.add("hide");

        }, 2100);

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
