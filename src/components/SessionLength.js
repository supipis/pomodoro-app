import React from 'react';

function SessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession()
    }

    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession()
    }


    return (
        <section>
            <h4>Session Length</h4>
            <section className='interval-container'>
                <button onClick={decreaseSession}>Down</button>
                <p>{props.sessionLength}</p>
                <button onClick={increaseSession}>Up</button>
            </section>
        </section>
    )
}

export default SessionLength;