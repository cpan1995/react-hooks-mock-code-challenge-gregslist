import React from "react";
import Search from "./Search";

function Header({handleSubmitApp}) {

  function handleSubmitHeader(searchValues){
    handleSubmitApp(searchValues)
  }
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmitHeader = {handleSubmitHeader}/>
    </header>
  );
}

export default Header;
