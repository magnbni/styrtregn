import { ReactElement, useState } from "react";
import "./Favourite.css";

export function FavouriteButton(city: string) {
  // Use the useState hook to manage the favorite state
  const localFavourite: boolean = localStorage.getItem(city.toLowerCase())
    ? true
    : false;
  const [favourite, setFavorite] = useState(localFavourite);


  const handleClick = () => {
    // Toggle the favourite state when the button is clicked
    if (localFavourite) {
      localStorage.removeItem(city.toLowerCase());
      setCities(Object.keys(localStorage));
    } else {
      localStorage.setItem(city.toLowerCase(), "true");
    }
    setFavorite(!localFavourite);
  };

  return (
    <button className="favourite" onClick={handleClick}>
      {favourite ? (
        <img src={"heart_filled.svg"} className="favourite" alt="icon" />
      ) : (
        <img src={"heart.svg"} className="favourite" alt="icon" />
      )}
    </button>
  );
}

export default function Favourites() {

  const [cities, setCities] = useState(Object.keys(localStorage));

  const favouriteCities: ReactElement<any, any>[] = [];
  localStorage.setItem("test", "true");
  localStorage.setItem("test2", "true");
  localStorage.setItem("test3", "true");
  console.log(localStorage);

  cities.forEach(function (key) {
    favouriteCities.push(
      <div className="favouriteElement">
        <div className="favouriteName">
          {FavouriteButton(key)}
          <h2>{key}</h2>
        </div>
        <div className="favouriteForecast">
          <h2>dummy element</h2>
        </div>
      </div>
    );
  });

  return (
    <div className="favourites">
      <header className="favourite">Favoritter</header>
      {favouriteCities}
    </div>
  );
}
