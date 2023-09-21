import { useEffect } from "react";
import "../index.css"
import useFetchCity from "../useFetchCity";
import HourlyView from "../components/HourlyView";
import DetailedWeekView from "../pages/DetailedWeekView";
import { useParams } from "react-router-dom";
import { FavouriteButton } from "../Favourite";

export default function Location() {
    const { id } = useParams<string>();

    const { statusMetCall, metData } = useFetchCity(id)
      
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
    },[id])

    function capitalizeFirstLetter(str: string) {
        return str
          .split(" ") // Split the string into an array of words
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
          .join(" "); // Join the words back together into a single string
      }

    return (
        <div>
            <h1>{capitalizeFirstLetter(id ?? "")}{id && <FavouriteButton city={id} />}</h1>
        {dayView != undefined && statusMetCall === "success" && metData ? 
        <DetailedWeekView dayView={dayView} rawData={metData?.properties}></DetailedWeekView> : 
        <></>}
        </div>
    )
}