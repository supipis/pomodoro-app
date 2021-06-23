import React, { useState, useEffect } from 'react'

export default function LengthSelector({ title, initialValue, onChange }) {
    const [currentValue, setCurrentValue] = useState(initialValue);

    useEffect(() => {
        onChange(currentValue);
        return () => { }
    }, [currentValue])

    return (
        <div>
            {title} - {currentValue}
            <button onClick={() => setCurrentValue(currentValue + 1)}>Increase</button>
            <button onClick={() => currentValue > 0 && setCurrentValue(currentValue - 1)}>Decrease</button>
        </div>
    )
}
