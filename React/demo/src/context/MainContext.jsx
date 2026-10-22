import React from 'react'
// import A from './propsDrlling/A'
import ChildA from './useData/ChildA'

function MainContext() {
    return (
        <div>
            <h1>Hello context data</h1>

            {/* <A /> */}


            {/* usecontext
                1) create context
            */}
            <ChildA />
        </div>
    )
}

export default MainContext
