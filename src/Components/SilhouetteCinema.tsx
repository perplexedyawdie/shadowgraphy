import React from 'react'
import Webcam from "react-webcam";
import { useWindowSize } from 'react-use';


function SilhouetteCinema() {
    const { width, height } = useWindowSize();

    return (
        <div className="h-screen w-full">
            <Webcam
                audio={false}
                width={width}
                height={height}
                screenshotFormat="image/jpeg" />
        </div>
    )
}

export default SilhouetteCinema