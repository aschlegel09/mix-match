import React from "react";
import "../App.css";

const Card = props => (
    <div className="card-item" onClick={() => props.randomRender(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} className="card-img" />
        </div>
    </div>
)

export default Card;