import React , {useState} from "react";

function ListingCard({description, image, location, parentHandleDelete, id}) {
  const [favorited, setFavorited] = useState(false)

  function handleClick(e){
    setFavorited(!favorited)
  }

  function handleDelete(){
    parentHandleDelete(id)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick}  className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
