import { useEffect, useState } from "react";
import "./hourlyview.css"

function HourlyView(props: {showBoolean: boolean}) {
    const [showHours, setShowHours] = useState(props.showBoolean);

    return (
        <div className="overlay">
            <h1>Hello I am test</h1>
            <p>Lorem ipsum brother in christ KILL YOURSELF !!!!!
                DOOOOOOOOOOOOOOOOOOOOOOOOOM
            </p>
            <button className="closeoverlay">X</button>
        </div>
    );
}

export default HourlyView;