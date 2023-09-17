import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import weekView from "./pages/WeekView";
import "./App.css";

function Fetcher() {
  const [city, setCity] = useState<string>();
  const [printCity, setPrintCity] = useState<string | unknown>("No City");

  const geoCode: string = `https://eu1.locationiq.com/v1/search?key=pk.3e21916e151f4d42374fdc631eded07a&q=${printCity}&format=json`;
  const metApiCall: string = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;


  const baseAPIcall: string =
    "https://api.weatherapi.com/v1/forecast.json?key=7a8579bd6b1743c299b82117230709&q=";
  const endQuery: string = "&days=3&aqi=no&alerts=no";

  const fetchGeocode = (): Promise<Geo | void> => fetch(geoCode, {
    credentials: "same-origin",
  })
    .then((res) => res.json()).then((data) => data as Geo)
    .catch((error) => console.log(error));

  const fetchMetData = (): Promise<WeatherData | void> => 
      fetch(metApiCall).then((res)=> res.json()).then((data)=> data as WeatherData)

  const { status: statusLocation, data: geoCodeData } = useQuery({
    queryKey: ["geoCode", printCity],
    queryFn: fetchGeocode,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 3000,
  });

  const { status: statusMetCall, data: metData } = useQuery({
    queryKey: ["geoCode", printCity],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrintCity(city);
  };

  if (status === "error") return <span>Currently struggling</span>;

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
      <h1>{data?.location?.name}</h1>
      {isLoading ? <span>Loading...</span> : <></>}
      {data ? weekView(data) : <></>}
    </div>
  );
}

export default Fetcher;
