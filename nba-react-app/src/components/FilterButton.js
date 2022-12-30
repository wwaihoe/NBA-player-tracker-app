import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function FilterButton(props) {
  return (
    <Button
    className="mx-1"
    aria-pressed={props.isPressed}
    onClick={() => props.setFilter(props.name)}
    style={{ backgroundColor: props.isPressed ? "#1d428a" : "white", 
            color: props.isPressed ? "white" : "black", 
            borderColor: "#1d428a"}}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> Players</span>
    </Button>     
  );
}

export default FilterButton;
