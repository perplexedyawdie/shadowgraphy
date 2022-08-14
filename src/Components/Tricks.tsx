import React from 'react'
import { shadowTricksData } from '../libs/cardData'
import TrickCard from './TrickCard'

function Tricks() {
    return (
        <div
            className="flex flex-col items-center h-screen pt-8 space-y-16">
            <h1 className="font-bold text-8xl">
                Tricks
            </h1>
            <div className="flex flex-col justify-center items-center space-y-4">
                {
                    shadowTricksData.map((shadowTrick) => (
                        <TrickCard
                            alt={shadowTrick.alt}
                            desc={shadowTrick.desc}
                            id={shadowTrick.id}
                            imgLoc={shadowTrick.imgLoc}
                            overlayLoc={shadowTrick.overlayLoc}
                            title={shadowTrick.title}
                            key={shadowTrick.id} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Tricks