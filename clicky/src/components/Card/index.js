import React from "react";
import "./style.css";

function Card(props){
    return (
        <div className="btn">
            <img src={props.image} alt={props.name}
            onClick={() => props.checkClick(props.clicked, props.id)}
            />
        </div>
    )
}

export default Card;