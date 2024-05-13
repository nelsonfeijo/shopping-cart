import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css'
import CartButton from "../CartButton/CartButton";
import { FaHandshakeSlash } from "react-icons/fa6";

function Header (){
  return (
    <header className="header">
      <div className="container">
        <span className="title"><FaHandshakeSlash />Mercado Preso</span>
      <SearchBar />
      <CartButton />
      </div>
    </header>
  )

}

export default Header