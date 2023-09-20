import { useEffect, useState } from "react";
import "./hourlyview.css"
import { Properties } from "../types";

function HourlyView(props: {showBoolean: boolean, metData: Properties, day: string}) {
    const { metData, day} = props;
    const [showHours, setShowHours] = useState<boolean>(props.showBoolean);
    const dato: string = "23. September"

    const handleClick = () => {
        setShowHours(true)
    }

    const returnTableData = () => {
        console.log(day?.slice(0,10))
        console.log(metData.timeseries[0].time.slice(0,10))
        return metData.timeseries.filter(e => e.time.slice(0,10) == day.slice(0,10)).map(
            (res) =>
            <>
                {console.log(res)}
                <tr key="time">
                    <td>{res.time.slice(11,16)}</td>
                    {/* Insert weathericon here */}
                    <td>{res.data.next_1_hours?.summary.symbol_code}</td>
                    <td>{res.data.instant.details.air_temperature} °C</td>
                    <td>{res.data.next_1_hours?.details.precipitation_amount}</td>
                    <td>{res.data.instant.details.wind_speed}</td>
                </tr>
            </>
        )
    }

    if (showHours){
        return (
            <div className="overlay">
                <h2>Været {dato}</h2>
                <div className="fluid-table">
                    <div className="table-container">
                    <table className="table2">
                        <thead>
                            <tr>
                                {/* Replace with tableheader function for ease of implentation? */}
                                <td>Klokkeslett</td>
                                <td>Vær</td>
                                <td>Temperatur</td>
                                <td>Nedbør mm</td>
                                <td>Vind m/s</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace with tablebody function for ease of implementation and cleaner code */}
                            {returnTableData()}
                        </tbody>
                    </table>
                    </div>
                </div>
                <button className="closeoverlay" onClick={(e) => setShowHours(false)}>X</button>
            </div>
        );
    }
    else {
        return <button className="more-info-button" onClick={handleClick}>Se været</button>
    }
}

export default HourlyView;