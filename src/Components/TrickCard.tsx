import React from 'react'
import { useNavigate } from 'react-router-dom'

function TrickCard() {
    const navigate = useNavigate();

    function handleBtnClick(e: any) {
        e.preventDefault();
        navigate("/cinema");
    }
    return (
        <div className="card glass">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleBtnClick}
                        className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    )
}

export default TrickCard