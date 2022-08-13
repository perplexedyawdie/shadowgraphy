import React from 'react'
import TrickCard from './TrickCard'

function Tricks() {
    return (
        <div
            className="flex flex-col items-center h-screen p-8 space-y-16">
            <h1 className="font-bold text-8xl">
                Tricks
            </h1>
            <div className="flex flex-col justify-center items-center space-y-4">
                <TrickCard />
                <TrickCard />
                <TrickCard />
                <TrickCard />
            </div>
        </div>
    )
}

export default Tricks