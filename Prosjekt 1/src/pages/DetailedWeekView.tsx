import "./DetailedWeekView.css";
import clearsky from "../weathericons-svg/clearsky_day.svg";

export default function DetWeekView() {
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
        <img src={clearsky} className="detcell" alt="icon" />
        <p className="detcell">Icon 2</p>
        <p className="detcell">Icon 3</p>
        <p className="detcell">Icon 4</p>
        <p className="detcell">11/14 {"\u00B0"}C</p>
        <p className="detcell">1,2 mm</p>
        <p className="detcell">4 m/s</p>
      </div>
    </div>
  );
}
