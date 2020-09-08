import React, { useContext } from 'react'
import { CounterContext, UserContext, ChannelContext } from '../App'

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    const { countState, countDispatch } = useContext(CounterContext);

    return (
        <div>
            <h1>
                User is {user}, and Channel is {channel}
            </h1>
            Component F {countState}
            <button onClick={() => countDispatch('increment')} >increment</button>
            <button onClick={() => countDispatch('decrement')} >decrement</button>
            <button onClick={() => countDispatch('reset')} >reset</button>
        </div>

    )
}

export default ComponentF
