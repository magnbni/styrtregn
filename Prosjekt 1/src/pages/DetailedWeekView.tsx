import FetchIcon from "../FetchIcon";
import "./DetailedWeekView.css";

export default function DetailedWeekView() {
  return (
    <div className="detcomp">
      <div className="detrow">
        <p className="detcell">Dato</p>
        <p className="detcell">Vær</p>
        <p className="detcell">Min/Max. temp.</p>
        <p className="detcell">Nedbør</p>
        <p className="detcell">Vind</p>
      </div>
      <div className="detrow">
        <p className="detcell">11.02.23 Mandag</p>
        <div className="detcell">{FetchIcon("clearsky_day")}</div>
        <p className="detcell">11/14 {"\u00B0"}C</p>
        <p className="detcell">1,2 mm</p>
        <p className="detcell">4 m/s</p>
      </div>
    </div>
  );
}
