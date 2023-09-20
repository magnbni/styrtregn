import { useEffect, useState } from "react";
import "../index.css"
import useFetchCity from "../useFetchCity";
import HourlyView from "../components/HourlyView";
import DetailedWeekView from "../pages/DetailedWeekView";

export default function Root() {
    const [city, setCity] = useState<string>();
    const [printCity, setPrintCity] = useState<string>("No-name")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city) {
            setPrintCity(city);
        } else {
            console.log("Cannot pass undefined")
        }
      };

    const { statusMetCall, metData } = useFetchCity(printCity)
      
    const dayView = metData?.properties.timeseries.map(function(day){
        return {
            date: day.time.slice(0,10),
            rain: day.data.next_6_hours?.details.precipitation_amount,
            wind: day.data.instant.details.wind_speed,
            symbol: day.data.next_12_hours?.summary.symbol_code,
            maxTemp: metData.properties.timeseries.filter(function(o){
                return o.time === day.time
            }).reduce(function(max, o){
                if(max < o.data.instant.details.air_temperature){
                    return o.data.instant.details.air_temperature
                }
                return max
            },-273)
        }
    }).filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.date).indexOf(obj.date) == pos;
    });

    useEffect(()=>{
    },[printCity])

    return (
        <>
        <div className="search">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Skriv inn en by"
                    onChange={(e) => {
                    setCity(e.target.value);
                    }}
                ></input>
                </label>
                <input type="submit" placeholder="Hei" className="submitButton"></input>
            </form>
        </div>
        {statusMetCall === "success" && metData ? 
        <HourlyView showBoolean={false} metData={metData?.properties} day={metData.properties.timeseries[10].time}/> 
        : <h2>Loading...</h2>}
        {dayView != undefined && statusMetCall === "success" && metData ? 
        <DetailedWeekView dayView={dayView} rawData={metData?.properties}></DetailedWeekView> : 
        <></>}
        </>
    )
}