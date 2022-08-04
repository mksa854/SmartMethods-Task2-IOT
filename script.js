var output = document.getElementById("output");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var language_Rec = document.getElementById("language_Rec");
var speechRecognition = speechRecognition || webkitSpeechRecognition;
var recognizer = new speechRecognition();

recognizer.lang = 'ar';

language_Rec.onchange = function() {
    recognizer.lang = language_Rec.value;
}

//controls
start.onclick = function() {
    recognizer.start();
}
stop.onclick = function() {
    recognizer.stop();
}
recognizer.onspeechend = function() {
    stop.click();
}
// to write:
recognizer.onresult = function(event) {
    var Textbox = event.results[0][0].transcript;
    output.value = Textbox;
    getCommand();
}

