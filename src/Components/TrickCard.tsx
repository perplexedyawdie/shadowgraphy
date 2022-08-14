import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TrickData } from '../models/trick.model';
import * as party from "party-js";

function TrickCard(props: TrickData) {     
    const navigate = useNavigate();
    
    function handleBtnClick(e: any) {
        e.preventDefault();
        party.sparkles(e.target);
        setTimeout(() => {
            navigate(`/cinema/${props.id}`);
        }, 600);
    }
    return (
        <div className="card glass max-w-md p-8">
            <figure>
                <img src={`${props?.imgLoc}`} alt={`${props?.alt}`} />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{props?.title}</h2>
                <p>{props?.desc}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleBtnClick}
                        className="btn btn-primary">Lights, Camera, Action!</button>
                </div>
            </div>
        </div>
    )
}

export default TrickCard