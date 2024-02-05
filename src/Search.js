import React, { useState } from "react";
import "./Search.css";
export default function Search() {
  let [search, setSearch] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${search}`);
  }
  function handleChange(event) {
    setSearch(event.target.value);
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
    </div>
  );
}
