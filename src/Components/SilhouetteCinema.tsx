import React from 'react'
import Webcam from "react-webcam";
import { useWindowSize } from 'react-use';
import { useParams } from 'react-router-dom';
import { shadowTricksData } from '../libs/cardData';
import CurtainRevealBox from './Curtain';


function SilhouetteCinema() {
    const { width, height } = useWindowSize();
    let params = useParams();
    let shadowTrick = shadowTricksData.find(st => st.id === parseInt(params.id!)) ?? shadowTricksData[0];
    let videoConstraints: MediaTrackConstraints = {
        facingMode: {
            ideal: "environment"
        }
    }
    console.log(height)
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <CurtainRevealBox>
                <div className="h-full grid grid-cols-2 grid-rows-3 place-items-center">
                    <img
                        className="col-start-1 col-end-3 row-start-1 row-end-4 w-1/2 md:w-1/4 z-30"
                        src={`${shadowTrick.overlayLoc}`}
                        alt={`${shadowTrick.alt}`} />
                    <img
                        className="col-start-1 col-end-3 row-start-3 row-end-4 z-20 animate-bounce"
                        src='/assets/images/crowd.png'
                        alt="silhoutte of a crowd" />
                    <Webcam
                        audio={false}
                        width={width}
                        height={height}
                        className="object-cover col-start-1 h-screen col-end-3 row-start-1 row-end-4 z-10"
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints} />
                </div>
            </CurtainRevealBox>
        </div>
    )
}

export default SilhouetteCinema