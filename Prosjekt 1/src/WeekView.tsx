/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import "./WeekView.css";

export default function weekView(data: any) {
  interface ForecastItem {
    date: string;
    day: string;
    temp: string;
    icon: string;
  }

  const days: ReactElement<any, any>[] = [];

  const DAYS: { [id: number]: string } = {
    1: "Mandag",
    2: "Tirdag",
    3: "Onsdag",
    4: "Tordag",
    5: "Fredag",
    6: "Lørdag",
    7: "Søndag",
  };

  const forecastList: ForecastItem[] = data?.forecast?.forecastday.map(
    (day: any) => ({
      date: day.date,
      day: DAYS[new Date(day.date).getDay()],
      temp: `${day.day.maxtemp_c} °C`,
      icon: day.day.condition.icon,
    })
  );

  console.log(forecastList);

  forecastList?.forEach((element: ForecastItem) => {
    days.push(
      <div className="days" key="{item}">
        <p>
          {element.date} <br /> {element.day}
        </p>
        <img src={element.icon} className="icon" alt="icon" />
        <p>{element.temp}</p>
      </div>
    );
  });

  return <div>
    {forecastList ? <div className="week">{days}</div> : <></>}
  </div>;
}
