import FetchIcon from "../FetchIcon";
import "./DetailedWeekView.css";
import { DayView, Properties } from "../types";
import HourlyView from "../components/HourlyView";

export default function DetailedWeekView(props: {dayView: DayView, rawData: Properties}) {
  
  const dayView = props.dayView
  const metData = props.rawData
  
  const DAYS: { [id: number]: string } = {
    1: "Mandag",
    2: "Tirdag",
    3: "Onsdag",
    4: "Torsdag",
    5: "Fredag",
    6: "Lørdag",
    7: "Søndag",
  };

  return (
    <div className="detcomp">
      <div className="detrow">
        <p className="detcell">Dato</p>
        <p className="detcell">Vær</p>
        <p className="detcell">Min/Max. temp.</p>
        <p className="detcell">Nedbør</p>
        <p className="detcell">Vind</p>
      </div>
      {dayView?.map((day) => 
        <div className="detrow">
          <p className="detcell">{day.date} {DAYS[new Date(day.date).getDay()]}</p>
          <div className="detcell">{day.symbol ? FetchIcon(day.symbol) : FetchIcon("clearsky_day")}</div>
          <p className="detcell">{day.maxTemp} {"\u00B0"}C</p>
          <p className="detcell">{day.rain}</p>
          <p className="detcell">{day.wind} m/s</p>
          <p className="detcell"><HourlyView metData={metData} showBoolean={false} day={day.date}></HourlyView></p>
        </div>
      )}
    </div>
  );
}
