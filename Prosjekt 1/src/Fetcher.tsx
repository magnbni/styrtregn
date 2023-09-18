import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import weekView from "./pages/WeekView";
import "./App.css";
import { Root, Geo, Series } from "./types";

function Fetcher() {
  const [city, setCity] = useState<string>();
  const [printCity, setPrintCity] = useState<string | unknown>();
  
  // Fetch function for the geolocation
  const fetchGeocode = (): Promise<Geo | void> => fetch(geoCode, {
    credentials: "same-origin",
  })
    .then((res) => res.json()).then((res)=>res[0]).then((data) => data as Geo)
    .catch((error) => console.log(error));

  // Fetch function for the metorological data
  const fetchMetData = (): Promise<Root | void> => 
      fetch(metApiCall).then((res)=> res.json()).then((data)=> data as Root);
  
  // Query for geolocation
  const { status: statusLocation, data: geoCodeData } = useQuery({
    queryKey: ["geoCode", printCity],
    queryFn: fetchGeocode,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  

  const geoCode: string = `https://eu1.locationiq.com/v1/search?key=pk.3e21916e151f4d42374fdc631eded07a&q=${printCity}&format=json`;
  const lon = geoCodeData?.lon
  const lat = geoCodeData?.lat
  
  const metApiCall: string = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
  
  // Dependent query for meterological data
  const { status: statusMetCall, data: metData } = useQuery({
    queryKey: ["metData", printCity],
    queryFn: fetchMetData,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!lat,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrintCity(city);
  };

  if (statusLocation === "error") return <span>Could not find location...</span>;
  if (statusMetCall === "error") return <span>Could not fetch weather data...</span>

  return (
    <div className="searchBox">
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
    <div className="favorites"><h1>Favoritter</h1></div>
      <ul>
        {statusMetCall === "loading" ? <p>Loading...</p> : metData?.properties.timeseries
        .filter(function (day: Series) {
          // Regular expression to only map 12 O'clock 12-hour forecast
          return (/12:00/.test(day.time))
        })
        // Simply prints the symbol as a string, this can be used as img src if we have WeatherIcons library
      .map((day)=><p>{day.data.next_12_hours?.summary.symbol_code} på dato: {day.time}</p>)
      }
      </ul>
    </div>
  );
}

export default Fetcher;
