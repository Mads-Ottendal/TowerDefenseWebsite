






var sheet = document.styleSheets[0];
const title = document.title;

let container = document.getElementById("windowContainer");


addEventListener("DOMContentLoaded",onLoadFunction);


function onLoadFunction(){
    changeContainerSize();
    formString()
    buttonPhrases()
}


function changeContainerSize() {
    if (title=='TTD-Help') {
        console.log("We are in if")
        sheet.insertRule(".middle { height: 100% !important }", 0);
    }
    else {
        console.log("We in else")
        sheet.insertRule(".middle { height: 100vh !important }", 0);
    }
}

var array = [];
let concatArray = [];

function formString() {
    document.addEventListener("keypress", e => {
        let element = e.key;
        let smallElement = element.toString().toLowerCase();
        array.push(smallElement);
        console.log(smallElement);
        concatArray = array.join("");
        tharanikaIsSmol();
        letItSnow();
        goToSlideShow();
        acrossTheStars();
        valentine();
    })

}


function tharanikaIsSmol() {
    if (concatArray.includes("tharanika")) {
        console.log("Tharanika Is SMOL");
        array = [];
        concatArray = [];
        textToSpeech("Tharanika is tiny");
    }
}

let letItSnowCounter = 0;
function letItSnow(){
    if(concatArray.includes("letitsnow"|| "let it snow")){
        letItSnowCounter++;
        array = [];
        concatArray = [];
        if(letItSnowCounter%2==0){
            removeSnowDiv();
            console.log("Remove snow")
        }else {

            console.log("It be snowing")
            createSnow(200);
        }
    }

}

function removeSnowDiv(){
    let divs = document.getElementsByTagName("div");
    for(let i = divs.length-1; i>0; i--){
        if(divs[i].classList.contains("snow")){
            divs[i].remove();
        }
    }
}


function textToSpeech(toBeSaid){
    function getVoices() {
        //The voices are the ovides from the speechSynthesis/the reader/speaker
        let voices = speechSynthesis.getVoices();
        //Ifthere is no voices
        if(!voices.length){
            // some time the voice will not be initialized so we can call speak with empty string
            // this will initialize the voices
            let utterance = new SpeechSynthesisUtterance("");
            //Uses speak method to inizialise with the empyu string utterence
            speechSynthesis.speak(utterance);
            //Get voices again
            voices = speechSynthesis.getVoices();
        }
        return voices;
    }

    //Speak function. Makes it speak.
    function speak(text, voice, rate, pitch, volume) {
        // create a SpeechSynthesisUtterance to configure the how text to be spoken
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = volume; // From 0 to 1
        speakData.rate = rate; // From 0.1 to 10
        speakData.pitch = pitch; // From 0 to 2
        speakData.text = text;
        speakData.lang = 'en';
        speakData.voice = voice;

        // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
        speechSynthesis.speak(speakData);

    }

    if ('speechSynthesis' in window) {
        let voices = getVoices();
        if(navigator.appVersion.indexOf("Win")!=-1){
            var voice = voices[2];
        }
        else if(navigator.appVersion.indexOf("Mac")!=-1){
            var voice = voices[0];
        }
        let rate = 1, pitch = 1, volume = 1;
        speak(toBeSaid, voice, rate, pitch, volume);
    }else{
        console.log(' Speech Synthesis Not Supported 😞');
    }
}



const snowContent = ['&#10052', '&#10053', '&#10054']

const random = (num) => {
    return Math.floor(Math.random() * num);
}


const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return ` 
top: -${top}%; 
left: ${left}%; 
font-size: ${size}px; 
animation-duration: ${dur}s; 
`;
}

const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
        var snow = document.createElement("div");
        snow.className = "snow";
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowContent[random(2)]
        container.appendChild(snow);
    }
}

function goToSlideShow(){
    if (concatArray.includes("treenigheden")){
        console.log("Yes");
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if(page == "slideShow.html"){
            window.location = "index.html"
        }
        else {
            window.location = "slideShow.html";
        }
    }
}
let acrossTheStarsCounter = 0;
let audio = new Audio("acrossTheStars.mp3");
function acrossTheStars() {
    if (concatArray.includes("acrossthestars")) {
        acrossTheStarsCounter++;
        array = [];
        concatArray = [];
        let playPromise = audio.play();

        if (acrossTheStarsCounter % 2 == 0) {
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    // We can now safely pause video...
                    audio.pause();
                    console.log("stop song");
                    return;
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }
            audio.currentTime = 0;
        }
        console.log("Across The Stars :)")
    }
}



const phrases = [
    "No",
    "Are you sure?",
    "Really really sure",
    "Pookie please",
    "Don't do this to me",
    "My love..",
    "I'm gonna cry...",
    "You're breaking my heart :("
]


let phraseCounter = 0;
let noButton = document.getElementById("noButton");
noButton.addEventListener("click",e=>{
    phraseCounter++;
    if(phraseCounter<phrases.length) {
        buttonPhrases();
        makeYesButtonBigger();
    }
    removeHearts();
})

function buttonPhrases(){
    noButton.innerText=phrases[phraseCounter];
}


let yesButton = document.getElementById("yesButton");
let noClicks=0;
function makeYesButtonBigger(){
    if(noClicks===0) {
        yesButton.setAttribute("style", "width:" + "" + 5 + "vw !important;\n" +
            "font-size: " + 18 + "px !important;");
        noClicks++
    }
    let widthBefore = yesButton.getAttribute("style","width")
    const styleArray = widthBefore.split("");
    let numberString1 =  styleArray.at(6);
    let numberString2 =  styleArray.at(7);

    console.log(numberString1 + "|" + numberString2)



    let buttonSize = numberString1+numberString2;
    let fontSizeString1 = styleArray.at(33);
    let fontSizeString2 = styleArray.at(34);
    let fontSizeString3 = styleArray.at(35);
    let fontSizeCombined = fontSizeString1+fontSizeString2;
    let fontSizeNumber;
    let number;
    if(Number.isInteger(Number(fontSizeString3))){
        fontSizeNumber = Number(fontSizeCombined+fontSizeString3);
    }
    else{
        fontSizeNumber = Number(fontSizeString1+fontSizeString2);
    }
    if(Number.isInteger(Number(numberString2))){
        number = Number(buttonSize);
    }
    else{
         number = Number(numberString1);
    }
    if(noClicks!=0) {
        let newSize = number + 10
        let newFontSize = fontSizeNumber + 25
        console.log(newFontSize)
        yesButton.setAttribute("style", "width:" + "" + newSize + "vw !important;\n" +
                                            "font-size:" + newFontSize + "px !important;");
    }
    if(noClicks!=phraseCounter) {
        noClicks++;
    }
    changeGapDifference(noClicks)
}


function changeGapDifference(number){
    if(number==1){
        buttonContainer.style.gridGap="15%";
    }
    if(number==2){
        buttonContainer.style.gridGap="25%";
    }
    if(number==3){
        buttonContainer.style.gridGap="35%";
    }
    if(number==4){
        buttonContainer.style.gridGap="45%";
    }
    if(number==5){
        buttonContainer.style.gridGap="60%";
    }
    if(number==6){
        buttonContainer.style.gridGap="75%";
    }
    if(number==7){
        buttonContainer.style.gridGap="85%";
    }
}



let buttonContainer = document.getElementById("buttonContainer");
let gifOfBearRoses = document.getElementById("flyingBear");
yesButton.addEventListener("click", e=>{
    createHearts(200);
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("YAY!"))
    buttonContainer.innerHTML=""
    buttonContainer.appendChild(p);
    gifOfBearRoses.setAttribute("src","./gifs/bearsHugging.gif")
    valentineContainer.firstElementChild.innerText="";


});


const heartContent = ['&#128150', '&#128157', '&#128156','&#128151', '&#128158']

let valentineContainer = document.getElementById("container");

const createHearts = (num) => {
    for (var i = num; i > 0; i--) {
        var heart = document.createElement("div");
        heart.className = "heart";
        heart.style.cssText = getRandomStyles();
        heart.innerHTML = heartContent[random(5)]
        valentineContainer.appendChild(heart);
    }
}



function removeHearts(){
    let divs = document.getElementsByTagName("div");
    for(let i = divs.length-1; i>0; i--){
        if(divs[i].classList.contains("heart")){
            divs[i].remove();
        }
    }
}


function valentine(){
    if(concatArray.includes("valentine")){
        console.log("Valentine");
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if(page == "valentine.html"){
            window.location = "index.html"
        }
        else {
            window.location = "valentine.html";
        }
    }
}









