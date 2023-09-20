import { useEffect, useState } from "react";
import "../index.css"
import useFetchCity from "../useFetchCity";
import HourlyView from "../components/HourlyView";
import DetailedWeekView from "../pages/DetailedWeekView";
import { useParams } from "react-router-dom";

export default function Location() {
    const { id } = useParams();

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

    return (
        <div>
            <h1>{id}</h1>
        {statusMetCall === "success" && metData ? 
        <HourlyView showBoolean={false} metData={metData?.properties} day={metData.properties.timeseries[10].time}/> 
        : <h2>Loading...</h2>}
        {dayView != undefined && statusMetCall === "success" && metData ? 
        <DetailedWeekView dayView={dayView} rawData={metData?.properties}></DetailedWeekView> : 
        <></>}
        </div>
    )
}