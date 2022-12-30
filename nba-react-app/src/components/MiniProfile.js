import React from "react";
import Col from 'react-bootstrap/Col';

function MiniProfile(props) {
    return (    
        <Col xs={4}>
            <div className="p-3 bg-light">
                <img src={`/teamlogos/${props.team}.png`} alt={`${props.team}_thumbnail`} width="60"/>
                <img src={`/playerthumbnails/${props.id}.png`} alt={`${props.name}_thumbnail`} width="280"/>
                <h2 className="MiniProfile-label" htmlFor={props.id}>
                    {props.name}
                </h2>
                <label>
                    PPG: {props.ppg}
                </label>
                <div className="checkbox">
                    <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.favourite}
                    onChange={() => props.togglePlayerFav(props.id)}
                    />
                    <label className="p-1 profile-label" htmlFor={props.id}>
                    Favourite
                    </label>
                </div>
            </div>
        </Col>
    );
}

export default MiniProfile;