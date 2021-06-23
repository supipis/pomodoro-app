import React, { useEffect, useState } from 'react'

export default function Countdown({ sessionLength, breakLength }) {
    const [secondsRemaining, setSecondsRemaining] = useState(sessionLength);
    const [currentMode, setCurrentMode] = useState('session');
    const [isRunning, setIsRunning] = useState(false);

    function reset() {
        setSecondsRemaining(sessionLength);
        setCurrentMode("session");
        setIsRunning(false);
    }

    useEffect(() => {
        if (secondsRemaining < 0 && currentMode == "session") {
            setSecondsRemaining(breakLength);
            setCurrentMode("break");
        }

        if (secondsRemaining == 0 && currentMode == "break") {
            setIsRunning(false);
        }
        return () => { }
    }, [secondsRemaining]);

    useEffect(() => {
        let interval;

        if (isRunning)
            interval = setInterval(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [isRunning, secondsRemaining])

    return (
        <div>
            Session: {sessionLength} <br />
            Break: {breakLength} <br /> <br />

            <div>
                {secondsRemaining}
                -- {currentMode}
                -- {String(isRunning)}
            </div>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)} > Stop</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}
