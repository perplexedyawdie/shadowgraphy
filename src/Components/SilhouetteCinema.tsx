import React from 'react'
import Webcam from "react-webcam";
import { useWindowSize } from 'react-use';
import { useParams } from 'react-router-dom';
import { shadowTricksData } from '../libs/cardData';


function SilhouetteCinema() {
    const { width, height } = useWindowSize();
    let params = useParams();
    let shadowTrick = shadowTricksData.find(st => st.id === parseInt(params.id!)) ?? shadowTricksData[0];
    
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
                <Webcam
                    audio={false}
                    width={width}
                    height={height}
                    className="col-start-2 col-end-3 row-start-2 row-end-3"
                    screenshotFormat="image/jpeg" />
                <img
                    className="text-5xl col-start-2 col-end-3 row-start-2 row-end-3 w-1/2"
                    src={`${shadowTrick.overlayLoc}`}
                    alt={`${shadowTrick.alt}`} />
            </div>

        </div>
    )
}

export default SilhouetteCinema