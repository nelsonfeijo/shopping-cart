import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import './SearchBar.css'

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return ( 
    <form className="search-bar">
          <input 
          type="search" 
          value={searchValue}
          placeholder="Buscar produtos" 
          className="search__input" 
          onChange={ ({ target }) => setSearchValue(target.value)}
          required />
          {searchValue}
          <button type="submit" className="search__button"><CiSearch /></button>
        </form>
   );
}

export default SearchBar;