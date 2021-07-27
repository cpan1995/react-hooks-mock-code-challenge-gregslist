import React , {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmitApp(searchValues){
    setSearchValue(searchValues)
  }

  return (
    <div className="app">
      <Header handleSubmitApp={handleSubmitApp}/>
      <ListingsContainer searchItem = {searchValue}/>
    </div>
  );
}

export default App;
