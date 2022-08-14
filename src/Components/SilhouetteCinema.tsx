import React from 'react'
import Webcam from "react-webcam";
import { useWindowSize } from 'react-use';
import { useParams } from 'react-router-dom';
import { shadowTricksData } from '../libs/cardData';


function SilhouetteCinema() {
    const { width, height } = useWindowSize();
    let params = useParams();
    let shadowTrick = shadowTricksData.find(st => st.id === parseInt(params.id!)) ?? shadowTricksData[0];
    let videoConstraints: MediaTrackConstraints = {
        width,
        height,
        facingMode: {
            ideal: "environment"
        }
    }
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="grid grid-cols-2 grid-rows-2 place-items-center">
                <img
                    className="col-start-1 col-end-3 row-start-1 row-end-3 w-1/2 z-20"
                    src={`${shadowTrick.overlayLoc}`}
                    alt={`${shadowTrick.alt}`} />
                <Webcam
                    audio={false}
                    width={width}
                    height={height}
                    className="col-start-1 col-end-3 row-start-1 row-end-3 z-10"
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints} />
            </div>

        </div>
    )
}

export default SilhouetteCinema