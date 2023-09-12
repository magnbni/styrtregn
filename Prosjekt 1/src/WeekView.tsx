import { ReactElement } from "react";
import "./WeekView.css";

export default function weekView(data: any) {
  interface ForecastItem {
    todayBoolean: boolean;
    date: string;
    day: string;
    temp: string;
    icon: string;
  }

  let days: ReactElement<any, any>[] = [];

  let DAYS: { [id: number]: string } = {
    1: "Mandag",
    2: "Tirdag",
    3: "Onsdag",
    4: "Tordag",
    5: "Fredag",
    6: "Lørdag",
    7: "Søndag",
  };

  const isToday = (date: Date) => {
    const today = new Date();

    return (
      date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
    );
  };

  const forecastList: ForecastItem[] = data?.forecast?.forecastday.map(
    (day: any) => ({
      todayBoolean: isToday(new Date(day.date)),
      date: new Date(day.date).toLocaleDateString().split(",")[0],
      day: isToday(new Date(day.date))
        ? "I dag"
        : DAYS[new Date(day.date).getDay()],
      temp: `${day.day.mintemp_c} °C / ${day.day.maxtemp_c} °C`,
      icon: day.day.condition.icon,
    })
  );

  console.log(forecastList);

  forecastList?.forEach((element: ForecastItem) => {
    days.push(
      <div
        className="day"
        key="{item}"
        style={element.todayBoolean ? { background: "#d7cb8a" } : {}}
      >
        <p>
          {element.date} <br /> {element.day}
        </p>
        <img src={element.icon} className="icon" alt="icon" />
        <p>{element.temp}</p>
      </div>
    );
  });

  return <div>{forecastList ? <div className="week">{days}</div> : <></>}</div>;
}
