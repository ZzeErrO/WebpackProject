import React from 'react'
import MouseTracker from '../components/CatBehindMouse(Render-Props)/MouseTracker.jsx'

export default function Practice() {
    return (
        <div>
            <h5>It is {new Date().toLocaleTimeString()}.</h5>
            <MouseTracker/>
        </div>
    )
}
