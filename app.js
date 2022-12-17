var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-txt");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text){
    return serverUrl +"?" + "text=" + text;
}

function callHeader()
{
    const textInput = inputText.value;  

    fetch(constructUrl(textInput))
    .then(response => response.json())
    .then(json => {

            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        }     
    )
        
};

btnTranslate.addEventListener("click", callHeader);