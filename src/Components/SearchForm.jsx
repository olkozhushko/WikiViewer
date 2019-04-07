import React from "react";

const SearchForm = ({onChange, value, onSubmit}) => {
  return (
    <form className="search-field" onSubmit={onSubmit}>
      <label htmlFor="search"></label>
      <input
        type="search"
        className="search-field__input"
        name="search"
        id="search"
        onChange={onChange}
        value={value}
        placeholder="search..."/>
      <button 
        type="submit" 
        className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  )
}

export default SearchForm;