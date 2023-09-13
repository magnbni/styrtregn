
import "./dayview.css"
function DayView(props: Day) {
    let hourly: JSONArray = props.day.hour
    return (
    <div className="scrollhours">
        {hourly.map((hour: Hour) => <>
            <div className="hourbox">
                <h3>{hour.time.slice(10,14)}</h3>
                <p>Temperatur: 27</p>
            <img src="https://cdn-icons-png.flaticon.com/512/252/252035.png" height={50} width={50}></img>
        </div>
        </>
            )}
    </div>
    );
}

export default DayView;