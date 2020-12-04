var btn_name=document.querySelector("#btn1");
var txt_input=document.querySelector("#txt_input");
var txt_output=document.querySelector("#txt_output");

var serverUrl="https://api.funtranslations.com/translate/dothraki.json";
function getTransUrl(text)
{
    return serverUrl+"?text="+text;
}
function errorHandler(error)
{
    console.log("error has occured ",error);
    alert("Something wrong with the server! Try again later after some time");
}

function clickHandler()
{
    var inputText=txt_input.value;
    fetch(getTransUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txt_output.innerText = translatedText;
        })
        .catch(errorHandler)
}

btn_name.addEventListener("click",clickHandler);