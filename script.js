// initializing elements
const input = document.querySelector("#data");
const button = document.querySelector("#search");
const result = document.querySelector(".search-result");
// url for dictionary
url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// adding event to search button
button.addEventListener("click", ()=>{
    const event = input.value;
    fetch(`${url}${event}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        console.log(event);
// rendering search result
        result.innerHTML=`
        <div class="word">
        <h2>${event}</h2>
    </div>
    <div class="details">   
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetics[0].text}</p>
    </div>
    <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="example">${data[0].meanings[0].definitions[0].example || ""}</p>
    <div class="synonyms">
    <p class="word-syn"> ${data[0].meanings[0].synonyms[0] || ""}</p>
    <pclass="word-ant"> ${data[0].meanings[0].antonyms[0] || ""}</p>
</div>`;

    }).catch(()=>{
        result.innerHTML=`<h3>No data found</h3>`
    })
})

