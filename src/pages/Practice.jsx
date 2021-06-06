import React, { Profiler } from 'react'
import MouseTracker from '../components/CatBehindMouse(Render-Props)/MouseTracker.jsx'


export default function Practice() {

    const onRenderCallback=(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
      )=> {
        // Aggregate or log render timings...
        console.log('Id is: ' + id + ' Phase is: ' + phase);
        console.log("Actual duration is: " + actualDuration + " Base Duration is: " + baseDuration);
      }

    return (
        <div>
            <h5>It is {new Date().toLocaleTimeString()}.</h5>
            <Profiler id ="MouseTracker" onRender= {onRenderCallback}>
            <MouseTracker/>
            </Profiler>
        </div>
    )
}
