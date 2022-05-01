import React, {useState} from 'react'
import {Oval} from 'react-loader-spinner'

function Loading() {
    return(
        <Oval
            color="pink"
            height={100}
            width={100}
            timeout={3000}
            display="flex"
            justify-content="center"
            align-items="center"
        />
    )
}
export default Loading;