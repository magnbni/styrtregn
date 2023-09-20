import DetailedWeekView from "./pages/DetailedWeekView";
import useFetchCity from "./useFetchCity";

function FavoriteView(props: {city: string}) {
    const city = props.city

    const { statusMetCall, metData } = useFetchCity(city)

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
    }).filter((obj, pos) => {
        if (pos < 4){
            return obj
        }
    });

    return (  
        <>
            {statusMetCall === "success" && metData ? <DetailedWeekView rawData={metData?.properties} dayView={dayView}></DetailedWeekView> : <h3>Loading...</h3>}
        </>
    );
}

export default FavoriteView;