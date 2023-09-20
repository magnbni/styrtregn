import { useState } from "react";
import "./hourlyview.css"
import { Properties } from "../types";
import FetchIcon from "../FetchIcon";

/**
 * This function returns a component that only shows the hourly forecast per
 * given date.
 * 
 * @param props 
 * @param showBoolean: boolean
 * @param metData: Properties
 * @param day: string
 * @returns
 */
function HourlyView(props: {showBoolean: boolean, metData: Properties, day: string}) {
    
    const { metData, day} = props;
    const [showHours, setShowHours] = useState<boolean>(props.showBoolean);

    const handleClick = () => {
        setShowHours(true)
    }

    const returnTableData = () => {
        return metData.timeseries.filter(e => e.time.slice(0,10) == day.slice(0,10)).map(
            (res) =>
            <>
                <tr key="time">
                    <td>{res.time.slice(11,16)}</td>
                    {/* Insert weathericon here */}
                    {res.data.next_1_hours?.summary.symbol_code ? FetchIcon(res.data.next_1_hours?.summary.symbol_code) : <></>}
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
                <h2>Været {day.slice(0,10)}</h2>
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
                <button className="closeoverlay" onClick={() => setShowHours(false)}>X</button>
            </div>
        );
    }
    else {
        return <button className="more-info-button" onClick={handleClick}>Se været</button>
    }
}

export default HourlyView;