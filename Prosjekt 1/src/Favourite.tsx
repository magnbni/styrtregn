import { ReactElement, useState } from "react";
import "./Favourite.css";
import DetailedWeekView from "./pages/DetailedWeekView";

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

function capitalizeFirstLetter(str: string) {
  return str
    .split(" ") // Split the string into an array of words
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back together into a single string
}

export default function Favourites() {
  const [cities] = useState(Object.keys(localStorage));

  const favouriteCities: ReactElement<string, string>[] = [];

  cities.forEach(function (key) {
    favouriteCities.push(
      <div>
        <div className="favouriteElement">
          <div className="favouriteName">
            {<FavouriteButton city={key} />}
            <h2>{capitalizeFirstLetter(key)}</h2>
          </div>
          <div className="favouriteForecast">{DetailedWeekView()}</div>
        </div>
        <div className="favouriteElement">
          <div className="favouriteName">
            {<FavouriteButton city={key} />}
            <h2>{capitalizeFirstLetter(key)}</h2>
          </div>
          <div className="favouriteForecast">{DetailedWeekView()}</div>
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
