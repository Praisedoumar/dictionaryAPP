const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = getElementById('search-btn');


btn.addEventListener('click'), async () =>{
    const inWord= document.getElementById('inp-word').value;
    try{
        const response = await fetch('${apiUrl}${inWord}');
        const data = await response.json();
    }
        if(data.Length === 0){
            result.innerHTML = '<h3 class="error"> Could not Find The Word!!!</h3>';
            sound.removeAttribute('src');
            return;
        }
        // result.innerHTML = '<div class="word">
        // <h3>${inp-word}</h3>
        // <button onclick="playSound()">
        // <i class="fas fa-volume-up"></i></button>
        // </div>



}