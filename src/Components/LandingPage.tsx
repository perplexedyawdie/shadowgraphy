import React from 'react'
import * as party from "party-js";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

function LandingPage() {
    let navigate = useNavigate();

    function handleBtnClick(e: any) {
        e.preventDefault();
        party.sparkles(e.target);
        setTimeout(() => {
            navigate("/tricks");
        }, 600);
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="w-full space-y-8">
                    <header>
                        <img className='m-auto' src='/assets/images/header.png' alt='Shadowgraphy' />
                    </header>
                    <Spline
                        scene="https://prod.spline.design/gpfP7d3WH2qi9HlV/scene.splinecode" />
                    <div>
                        <button
                            onClick={handleBtnClick}
                            className="btn btn-accent btn-lg">Start the Show</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage