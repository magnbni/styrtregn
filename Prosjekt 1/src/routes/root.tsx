import { useEffect, useState } from "react";
import "./root.css"
import Fetcher from "../Fetcher";
import { Link } from "react-router-dom";
import useFetchCity from "../useFetchCity";
import HourlyView from "../components/HourlyView";

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
        </>
    )
}