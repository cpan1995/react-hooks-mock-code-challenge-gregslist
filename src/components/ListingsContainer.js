import React , { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchItem}) {
  const [itemsListing, setItems] = useState([])
  const [getDeleteItems, setDeleteItem] = useState(0);
  
  let searchArray = itemsListing.filter(item => item.description.toLowerCase().includes(searchItem.toLowerCase()))

  function parentHandleDelete(id){
    let newArray = itemsListing.filter(item => item.id !== id)
    setDeleteItem(id)
    setItems(newArray)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  useEffect(() => {
    
    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`http://localhost:6001/listings/${getDeleteItems}`, requestOptions)
    .then(response => console.log(response))

  }, [getDeleteItems])

  const itemsComponentList = searchArray.map(eachItem => {
    return (
      <ListingCard key={eachItem.id} id = {eachItem.id} description = {eachItem.description} image = {eachItem.image} location = {eachItem.location} parentHandleDelete = {parentHandleDelete}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {itemsComponentList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
