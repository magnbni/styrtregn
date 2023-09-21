import "./hourlyview.css"
import { Properties } from "../types";
import FetchIcon from "../FetchIcon";
import "./Popup.css"
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
function HourlyView(props: { metData: Properties, day: string}) {
    
    const { metData, day} = props;

    const returnTableData = () => {
        return metData.timeseries.filter(e => e.time.slice(0,10) == day.slice(0,10)).map(
            (res) =>
            <>
                <tr key="time">
                    <td>{res.time.slice(11,16)}</td>
                    <td style={{ width: "15%" }}>
                    {res.data.next_1_hours?.summary.symbol_code ? FetchIcon(res.data.next_1_hours?.summary.symbol_code) : <p></p>}
                    </td>
                    <td>{res.data.instant.details.air_temperature} °C</td>
                    <td>{ res.data.next_1_hours?.details.precipitation_amount ? res.data.next_1_hours.details.precipitation_amount : res.data.next_6_hours?.details.precipitation_amount}</td>
                    <td>{res.data.instant.details.wind_speed}</td>
                </tr>
            </>
        )
    }

    
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
        </div>
    );
}



export default HourlyView;