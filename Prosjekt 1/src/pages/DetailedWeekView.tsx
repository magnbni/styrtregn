import FetchIcon from "../FetchIcon";
import "./DetailedWeekView.css";
import { DayView, Properties } from "../types";
import HourlyView from "../components/HourlyView";
import { useState } from "react";

export default function DetailedWeekView(props: {
  dayView: DayView;
  rawData: Properties;
}) {
  const dayView = props.dayView;
  const metData = props.rawData;

  const DAYS: { [id: number]: string } = {
    1: "Mandag",
    2: "Tirdag",
    3: "Onsdag",
    4: "Torsdag",
    5: "Fredag",
    6: "Lørdag",
    7: "Søndag",
  };

  // Step 1: Define state variables to manage the popup
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");

  // Step 2: Function to show the popup
  const showPopup = (day: string) => {
    setSelectedDay(day);
    setPopupVisible(true);
  };

  // Function to hide the popup
  const hidePopup = () => {
    setSelectedDay("");
    setPopupVisible(false);
  };

  return (
    <div className="detcomp">
      <div className="detrow">
        <p className="detcell">Dato</p>
        <p className="detcell">Vær</p>
        <p className="detcell">Min/Max. temp.</p>
        <p className="detcell">Nedbør</p>
        <p className="detcell">Vind</p>
        <p className="detcell"></p>
      </div>
      {dayView?.map((day) => (
        <div className="detrow">
          <p className="detcell">
            {day.date.split("-")[2]}
            {"."}
            {day.date.split("-")[1]} {DAYS[new Date(day.date).getDay()]}
          </p>
          <div className="detcell">
            {day.symbol ? FetchIcon(day.symbol) : FetchIcon("clearsky_day")}
          </div>
          <p className="detcell">
            {day.maxTemp} {"\u00B0"}C
          </p>
          <p className="detcell">{day.rain} mm</p>
          <p className="detcell">{day.wind} m/s</p>
          <p className="detcell">
            <button onClick={() => showPopup(day.date)}>Se været</button>
          </p>
        </div>
      ))}

      {/* Render HourlyView as a popup when isPopupVisible is true */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <HourlyView metData={metData} day={selectedDay} />
          <button className="close-popup" onClick={hidePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
