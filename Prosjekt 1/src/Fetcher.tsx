import { useState } from "react";
import { useQuery } from "@tanstack/react-query"

function Fetcher() {
    const [city, setCity] = useState<String>() 
    const [printCity, setPrintCity] = useState<String | any>("No City")

    let baseAPIcall : string = "https://api.weatherapi.com/v1/forecast.json?key=7a8579bd6b1743c299b82117230709&q="
    let endQuery : string = "&days=3&aqi=no&alerts=no"

    const {status, data, isLoading} = useQuery({
        queryKey: ["dayandtemp", printCity],
        queryFn: async () =>
            {return fetch(baseAPIcall + city + endQuery).then(res =>
            res.json()
        ).catch(error => console.log(error))},
        initialData: "Stockholm",
        refetchOnMount: false,
        refetchOnWindowFocus: false
    })

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        setPrintCity(city)
    }

    if (status === "error") return <h1>Waiting</h1>
    
    return ( 
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    <input type="text" className="searchbar" placeholder="Skriv inn en by" onChange={(e) => {setCity(e.target.value);}}></input>
                </label>
                <input type="submit" placeholder="Hei"></input>
            </form>
            <h1>{data?.location?.name}</h1>
            <ul>
                {!isLoading ? data?.forecast?.forecastday.map((day : any) => <li key={day.date}>Date {day.date}, Temperatur: {day.day.maxtemp_c} °C</li>): <h3>Loading</h3>}
                {!isLoading ? <img src={data?.current?.condition.icon}></img> : <h2>Loading</h2>}
            </ul>
        </div>
    );
}

export default Fetcher;