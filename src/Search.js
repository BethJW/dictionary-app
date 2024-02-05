import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DefinitionBody from "./DefinitionBody";
export default function Search() {
  let [Search, setSearch] = useState(null);
  let [definitionData, setdefinitionData] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setdefinitionData({
      data: response.data[0],
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }
  function apiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Search}`;
    axios.get(apiUrl).then(handleResponse);
  }

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
}
