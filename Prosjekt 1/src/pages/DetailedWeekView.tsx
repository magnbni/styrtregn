import "./DetailedWeekView.css";
import clearsky from "../weathericons-svg/clearsky_day.svg";
import FetchIcon from "../fetchIcon";

export default function DetailedWeekView() {
  return (
    <div className="detcomp">
      <div className="detrow">
        <p className="detcell">Dato</p>
        <p className="detcell">Natt</p>
        <p className="detcell">Morgen</p>
        <p className="detcell">Ettermiddag</p>
        <p className="detcell">Kveld</p>
        <p className="detcell">Min/Max. temp.</p>
        <p className="detcell">Nedbør</p>
        <p className="detcell">Vind</p>
      </div>
      <div className="detrow">
        <p className="detcell">11.02.23 Mandag</p>
        {FetchIcon("clearsky_day")}
        {FetchIcon("rainshowers_polartwilight")}
        {FetchIcon("snowshowersandthunder_polartwilight")}
        {FetchIcon("sleetshowersandthunder_day")}
        <p className="detcell">11/14 {"\u00B0"}C</p>
        <p className="detcell">1,2 mm</p>
        <p className="detcell">4 m/s</p>
      </div>
    </div>
  );
}
