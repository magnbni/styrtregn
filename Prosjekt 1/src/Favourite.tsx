import { useState } from "react";
import "./Favourite.css";
import weekView from "./pages/WeekView";

export function FavouriteButton(isFavourite: boolean) {
  // Use the useState hook to manage the favorite state
  const [favourite, setFavorite] = useState(isFavourite);

  const handleClick = () => {
    // Toggle the favorite state when the button is clicked
    setFavorite(!favourite);
  };

  return (
    <button className="favourite" onClick={handleClick}>
      {favourite ? (
        <img src={"lover.png"} className="favourite" alt="icon" />
      ) : (
        <img src={"notlover.png"} className="favourite" alt="icon" />
      )}
    </button>
  );
}

export default function Favourites() {
  return (
    <div className="favourites">
      <header className="favourite">Favoritter</header>
      <div className="favouriteElement">
        <div className="favouriteName">
          {FavouriteButton(true)}
          <h2>Oslo</h2>
        </div>
        <div className="favouriteElement">{/* </div>{weekView()} */}</div>
      </div>
    </div>
  );
}
