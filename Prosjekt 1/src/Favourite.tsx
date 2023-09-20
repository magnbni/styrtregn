import { ReactElement, useState } from "react";
import "./Favourite.css";

export function FavouriteButton({ city }: { city: string }) {
  // Use the useState hook to manage the favorite state
  const localFavourite: boolean = localStorage.getItem(city.toLowerCase())
    ? true
    : false;
  const [favourite, setFavorite] = useState(localFavourite);


  const handleClick = () => {
    // Toggle the favourite state when the button is clicked
    if (localFavourite) {
      localStorage.removeItem(city.toLowerCase());
      
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
  console.log(Object.keys(localStorage))
  const [cities, setCities] = useState(Object.keys(localStorage));
  console.log(cities)

  const favouriteCities: ReactElement<string, string>[] = [];

  cities.forEach(function (key) {
    favouriteCities.push(
      <div className="favouriteElement">
        <div className="favouriteName">
        {<FavouriteButton city={key} />}
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
