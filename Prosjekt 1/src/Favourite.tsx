import { useState } from 'react';
import './Favourite.css';

interface FavouriteProps {
  isFavourite: boolean; // Specify the prop type as boolean
}

export default function Favourite({ isFavourite }: FavouriteProps) {
  // Use the useState hook to manage the favorite state
  const [favourite, setFavorite] = useState(isFavourite);

  const handleClick = () => {
    // Toggle the favorite state when the button is clicked
    setFavorite(!favourite);
  };

  return (      
    <button className="favourite" onClick={handleClick}>
      {favourite ? <img src={"lover.png"} className="img" alt="icon" /> : <img src={"notlover.png"} className="img" alt="icon" />}
    </button>
  )
}
