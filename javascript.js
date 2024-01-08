
function changeContainerSize() {
    let help = document.getElementById("helpID");
    const middle = document.getElementById("middleID");
    if (help.classList.contains("active")) {
        console.log("We are in if")
        middle.style.height = '100%';
    }
    else {
        console.log("We in else")
        middle.style.height = '100vh';
    }
}

var array = [];
let concatArray = [];
function addInputToArrayList(){
    document.addEventListener("keypress", e =>{
        let element = e.key;
        let smallElement = element.toString().toLowerCase();
        array.push(smallElement);
        console.log(smallElement);
        concatArray = array.join("");
        tharanikaIsSmol();
    })

}

function tharanikaIsSmol(){
      if(concatArray.includes("tharanika")){
          console.log("Tharanika Is SMOL");
          array = [];
          concatArray = [];
          textToSpeech("Tharanika is tiny");
    }}


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


