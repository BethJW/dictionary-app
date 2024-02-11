import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DefinitionBody from "./DefinitionBody";
import Photos from "./Photos";
export default function Search() {
  let [Search, setSearch] = useState(null);
  let [definitionData, setdefinitionData] = useState(null);
  let [photos, setPhotos] = useState(null);
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
  function handlePhotoResponse(response) {
    console.log(response.data.photos.photos);
    setPhotos(response.data.photos);
  }
  function apiCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Search}`;
    axios.get(apiUrl).then(handleResponse);
    let photoKey = `0Nddsl4wDH5eDFu59dZbg1j0N03zth3ksk99ZdpXFxtf7ZE6JUu2YF4M`;
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${Search}&per_page=6`;
    axios
      .get(photoApiUrl, { headers: { Authorization: `${photoKey}` } })
      .then(handlePhotoResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
