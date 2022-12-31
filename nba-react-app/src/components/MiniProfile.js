import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function MiniProfile(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (    
        <>
            <Col xs={4} className="Button" onClick={handleShow}>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        PPG: {props.ppg}
                    </p>
                    <p>
                        APG: {props.apg}
                    </p>
                    <p>
                        RPG: {props.rpg}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MiniProfile;