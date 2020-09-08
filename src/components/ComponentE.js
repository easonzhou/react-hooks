import React from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentE() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return  <h1> User is {user}, channel is {channel} </h1>;
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentE
