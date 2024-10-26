function dictionaryApi(word) {
  let api = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
  axios.get(api).then(searchDictionary);
}
