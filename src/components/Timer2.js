import React, { useState } from 'react';

export default function Timer2(props) {
    const [state, setState] = useState({
        isSession: true,
        timerSecond: 0,
        intervalId: 0
    })

    function playTimer() {
        let intervalId = setInterval(decreaseTimer, 1000)
        setState({
            ...state,
            intervalId: intervalId
        })
    }
    function decreaseTimer() {
        switch (state.timerSecond) {
            case 0:
                if (props.timerMinute === 0) {
                    if (state.isSession) {
                        setState({
                            ...state,
                            isSession: false
                        })

                        props.toggleInterval(state.isSession);
                    } else {
                        setState({
                            ...state,
                            isSession: true
                        })
                        props.toggleInterval(state.isSession);
                    }
                } else {
                    props.updateTimerMinute()
                    setState({
                        ...state,
                        timerSecond: 59
                    })
                }

                break;
            default:
                setState({ ...state, timerSecond: state.timerSecond - 1 })
        }
    }

    function stopTimer() {
        clearInterval(state.intervalId)
    }

    function resetTimer() {
        stopTimer();
        props.resetTimer();
        setState({
            ...state,
            timerSecond: 0,
            isSession: true
        })
    }

    return (
        <section className='timer-content'>
            <section className='timer-container'>
                <h4>{state.isSession === true ? 'Session' : 'Break'}</h4>
                <span className='timer'>{props.timerMinute}</span>
                <span className='timer'>:</span>
                <span className='timer'>{state.timerSecond === 0 ? '00' : state.timerSecond < 10 ? '0' + state.timerSecond : state.timerSecond}</span>
            </section>
            <section className='timer-actions'>
                <button onClick={playTimer}>Play</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>
        </section>
    )
}