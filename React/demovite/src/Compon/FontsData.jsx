import React from 'react'

function FontsData() {
    return (
        <div>
            <h1 className='text-xl '>Hello data</h1>
            <h1 className='text-2xl font-sans'>Hello data</h1>
            <h1 className='text-3xl decoration-dashed underline text-left font-serif'>Hello data</h1>
            <h1 className='text-4xl overline uppercase decoration-double text-red-400 text-center font-mono' >Hello data</h1>
            <h1 className='text-5xl italic lowercase line-through decoration-red-400 text-yellow-300 font-bold'>Hello data</h1>
            <h1 className='text-6xl text-right'>Hello data</h1>
            <h1 className='text-7xl capitalize'>Hello data</h1>


            <p class="tracking-tight ...">The quick brown fox ...</p>
            <p class="tracking-normal ...">The quick brown fox ...</p>
            <p class="tracking-wide ...">The quick brown fox ...</p>
        </div>
    )
}

export default FontsData
