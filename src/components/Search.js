import React, { useState } from "react";

function Search({handleSubmitHeader}) {
  const [searchValues, setSearch] = useState('')


  function handleSubmit(e) {
    e.preventDefault()
    handleSubmitHeader(searchValues)
  }

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValues}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
