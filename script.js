function searchDictionary(response) {
  console.log(response.data);
  let wordResult = document.querySelector("#h1");
  wordResult.innerHTML = response.data[0].word;

  let result = document.querySelector("#phonetic");
  result.innerHTML = `/${response.data[0].phonetics[1].text}`;

  let speech = document.querySelector("#speech");
  speech.innerHTML = ` /${response.data[0].meanings[0].partOfSpeech}`;

  let define = document.querySelector("#defined");
  define.innerHTML = response.data[0].meanings[0].definitions[0].definition;

  let defined = document.querySelector("#second-defined");
  defined.innerHTML = response.data[0].meanings[0].definitions[1].definition;

  let synonym = document.querySelector("#synonym");
  synonym.innerHTML = ` Synonyms: ${response.data[0].meanings[0].synonyms[0]}`;

  let secondSynonym = document.querySelector("#second-synonym");
  secondSynonym.innerHTML = `  /${response.data[0].meanings[0].synonyms[1]}`;

  let sound = document.querySelector("#sound");
  sound.innerHTML = `<audio src =${response.data[0].phonetics[0].audio}></audio>`;
}

function dictionaryApi(word) {
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(api).then(searchDictionary);
}

function wordSearchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-box");
  dictionaryApi(searchInput.value);
}

let button = document.querySelector("#search");
button.addEventListener("submit", wordSearchForm);
