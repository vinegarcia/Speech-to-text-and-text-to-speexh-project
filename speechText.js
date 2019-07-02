
class SpeechRecognitionApi{
    constructor(options){
        const speechTotext = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechAPI = new speechTotext();
        this.output = options.output ? options.output : document.createElement('div');
        this.speechAPI.continuous = true;
        this.speechAPI.interimResult= false;
        this.speechAPI.onresult = (event) => {
                var resultIndex = event.resultIndex;
                var transcript = event.results[resultIndex][0].transcript;
                this.output.textContent += transcript;
        }

    }
    init(){
        this.speechAPI.start();
    }

    stop(){
        this.speechAPI.stop();
    }
}

    window.onload = function (){
        var speech = new SpeechRecognitionApi({
            output: document.querySelector(".output")
        })
        document.querySelector(".btn-start").addEventListener("click", () => {
                speech.init();
        })
        document.querySelector(".btn-end").addEventListener("click", () => {
                speech.stop();
        })
    

    }