// ===============================
// MARKed for MAE - script.js v1.0
// ===============================

const opening = document.getElementById("opening");
const website = document.getElementById("website");
const enter = document.getElementById("enter");

const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");

// Hide website at start
website.style.display = "none";

// Open Invitation
enter.addEventListener("click", function () {

    opening.style.opacity = "0";
    opening.style.transition = "0.8s";

    setTimeout(function () {

        opening.style.display = "none";
        website.style.display = "block";

    }, 800);

    // Play music
    music.play().catch(function(){});

    musicBtn.style.display = "block";

});

// Music Button
musicBtn.addEventListener("click", function(){

    if(music.paused){

        music.play();
        musicBtn.innerHTML = "♫";

    }else{

        music.pause();
        musicBtn.innerHTML = "▶";

    }

});

// ===============================
// Countdown
// ===============================

const weddingDate = new Date("April 27, 2027 15:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countdown();

setInterval(countdown,1000);
