import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Test() {
    return(
        <div>
            <h5>test 페이지</h5>
            <Outlet/>
        </div>
    )
}