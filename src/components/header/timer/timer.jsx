import { useState } from "react";
import "./timer.css";

function Timer() {
    const [time, setTime] = useState(new Date());

    setInterval(() => setTime(new Date()), 1000);

    return (
        <div className="timer">
            <h3 className="timer-h3 roboto-medium">{time.toLocaleTimeString()}</h3>
        </div>
    );
}

export default Timer;
