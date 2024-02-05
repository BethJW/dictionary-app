import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DefinitionBody from "./DefinitionBody";
export default function Search() {
  let [Search, setSearch] = useState(null);
  let [definitionData, setdefinitionData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setdefinitionData({
      ready: true,
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
      definitionObject: response.data[0].meanings[0].partOfSpeech,
      definition: response.data[0].meanings[0].definitions[0],
      altDefinitionObject: response.data[0].meanings[1].partOfSpeech,
      altDefinition: response.data[0].meanings[1].definitions[0],
      synonms: response.data[0].meanings[0].definitions[0].synonyms,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${Search}`);
    apiCall();
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }
  function apiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Search}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (definitionData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="form mt-5 ">
          <input
            onChange={handleChange}
            type="search"
            placeholder="Search for a word..."
            className="w-75 search-bar p-2 "
          />
          <input
            type="submit"
            value="search"
            className="w-25 btn btn-outline-success p-2 search-btn"
          />
        </form>
        <DefinitionBody data={definitionData} />
      </div>
    );
  } else {
    apiCall();
    return "Loading";
  }
}
