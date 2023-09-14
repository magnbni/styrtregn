import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import weekView from "./pages/WeekView";

function Fetcher() {
  const [city, setCity] = useState<string>();
  const [printCity, setPrintCity] = useState<string | unknown>("No City");

  const baseAPIcall: string =
    "https://api.weatherapi.com/v1/forecast.json?key=7a8579bd6b1743c299b82117230709&q=";
  const endQuery: string = "&days=3&aqi=no&alerts=no";

  const { status, data, isLoading } = useQuery({
    queryKey: ["dayandtemp", printCity],
    queryFn: async () => {
      return fetch(baseAPIcall + city + endQuery, {
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 3000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrintCity(city);
  };

  if (status === "error") return <span>Currently struggling</span>;

  return (
    <div>
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
        <input type="submit" placeholder="Hei"></input>
      </form>
      <h1>{data?.location?.name}</h1>
      {isLoading ? <span>Loading...</span> : <></>}
      {data ? weekView(data) : <></>}
    </div>
  );
}

export default Fetcher;
