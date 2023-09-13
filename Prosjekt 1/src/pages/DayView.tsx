
import "./dayview.css"
function DayView(props: Day) {
    let hourly: JSONArray = props.day.hour
    return (
    <div className="scrollhours">
        {hourly.map((hour: Hour) => <>
            <div className="hourbox">
                <h3>{hour.time.slice(10,16)}</h3>
                <p>Temperatur: 27</p>
            <img src={hour.condition.icon} height={50} width={50}></img>
        </div>
        </>
            )}
    </div>
    );
}

export default DayView;