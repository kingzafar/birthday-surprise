// ===============================
// Moon Memory
// Final Script
// ===============================

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const continueBtn = document.getElementById("continueBtn");

const loginPanel = document.querySelector(".login-panel");
const successScreen = document.getElementById("successScreen");
const videoSection = document.getElementById("videoSection");

const message = document.getElementById("message");

const musicButton = document.getElementById("musicButton");

const mainMusic = document.getElementById("mainMusic");
const wrongMusic = document.getElementById("wrongMusic");

const memoryVideo = document.getElementById("memoryVideo");

let musicPlaying = false;

window.onload = function(){

successScreen.classList.add("hidden");

videoSection.classList.add("hidden");

message.innerHTML="";

passwordInput.value="";

passwordInput.focus();

  }// ===============================
// Music Button
// ===============================

musicButton.addEventListener("click",function(){

if(musicPlaying){

mainMusic.pause();

musicButton.innerHTML="🎵";

musicPlaying=false;

}else{

wrongMusic.pause();

mainMusic.play();

musicButton.innerHTML="🔊";

musicPlaying=true;

}

});


// ===============================
// Press Enter
// ===============================

passwordInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

unlockBtn.click();

}

});


// ===============================
// Clear Error Message
// ===============================

passwordInput.addEventListener("input",function(){

message.innerHTML="";

message.style.color="#ffffff";

});// ===============================
// Unlock System
// ===============================

unlockBtn.addEventListener("click",function(){

const password=passwordInput.value.trim();

if(password==="0919"){

message.innerHTML="";

loginPanel.style.opacity="0";

setTimeout(function(){

loginPanel.classList.add("hidden");

successScreen.classList.remove("hidden");

successScreen.style.opacity="0";

setTimeout(function(){

successScreen.style.opacity="1";

mainMusic.currentTime=0;

mainMusic.play();

musicPlaying=true;

musicButton.innerHTML="🔊";

},100);

},600);

}else{

mainMusic.pause();

wrongMusic.currentTime=0;

wrongMusic.play();

musicPlaying=false;

musicButton.innerHTML="🎵";

message.style.color="#ff6b6b";

message.innerHTML="❌ Wrong Password";

document.body.classList.add("wrong");

setTimeout(function(){

document.body.classList.remove("wrong");

},500);

passwordInput.value="";

passwordInput.focus();

}

});// ===============================
// Continue Button
// ===============================

continueBtn.addEventListener("click",function(){

successScreen.classList.add("hidden");

videoSection.classList.remove("hidden");

mainMusic.pause();

memoryVideo.currentTime=0;

memoryVideo.play();

});


// ===============================
// Video Events
// ===============================

memoryVideo.addEventListener("play",function(){

mainMusic.pause();

});

memoryVideo.addEventListener("pause",function(){

if(!memoryVideo.ended){

mainMusic.play();

musicPlaying=true;

musicButton.innerHTML="🔊";

}

});

memoryVideo.addEventListener("ended",function(){

mainMusic.currentTime=0;

mainMusic.play();

musicPlaying=true;

musicButton.innerHTML="🔊";

});


// ===============================
// Final Effects
// ===============================

setInterval(function(){

const moon=document.querySelector(".moon");

if(moon){

moon.style.filter="brightness("+(0.95+Math.random()*0.1)+")";

}

},2500);// ===============================
// Final Optimization
// ===============================

// جلوگیری از ارسال فرم با Enter در صورت وجود
document.addEventListener("submit", function(e){
    e.preventDefault();
});

// جلوگیری از چند بار کلیک روی Unlock
let isUnlocked = false;

unlockBtn.addEventListener("click", function(){

    if(isUnlocked){
        return;
    }

    if(passwordInput.value.trim() === "0919"){
        isUnlocked = true;
    }

});

// تنظیم اولیه دکمه موزیک
musicButton.innerHTML = "🎵";

// توقف موزیک خطا هنگام خروج از صفحه
window.addEventListener("beforeunload", function(){

    mainMusic.pause();
    wrongMusic.pause();

});

// فوکوس خودکار روی رمز
setTimeout(function(){

    if(passwordInput){
        passwordInput.focus();
    }

},500);

// ===============================
// End Of Script
// ===============================
