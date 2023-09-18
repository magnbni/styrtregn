import { useParams } from "react-router-dom";
import weekView from "../pages/WeekView";
import { useQuery } from "@tanstack/react-query";

export default function Location() {
    const { city } = useParams();

    const baseAPIcall: string =
    "https://api.weatherapi.com/v1/forecast.json?key=7a8579bd6b1743c299b82117230709&q=";
    const endQuery: string = "&days=3&aqi=no&alerts=no";

    const { status, data, isLoading } = useQuery({
        queryKey: ["dayandtemp", city],
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

    if (status === "error") return <span>Currently struggling</span>;

    return (
        <div className="searchBox">
        <div className="favorites"><h1>Favoritter</h1></div>
            <h1>{data?.location?.name}</h1>
            {isLoading ? <span>Loading...</span> : <></>}
            {data ? weekView(data) : <></>}
        </div>
    );
}