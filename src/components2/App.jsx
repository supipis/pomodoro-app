import React, { useState } from 'react'
import Countdown from './Countdown';
import LengthSelector from './LengthSelector';

export default function App() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

    return (
        <div>
            <LengthSelector title="Session" initialValue={25} onChange={setSessionLength} />
            <LengthSelector title="Break" initialValue={5} onChange={setBreakLength} />
            <Countdown breakLength={breakLength} sessionLength={sessionLength} />
        </div>
    )
}
