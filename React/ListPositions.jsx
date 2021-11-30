import React from "react";
import './listPositions.css';

function ListPositions(props) {
    return (
        <>
            <label className="container-check">{props.name}
                <input type="checkbox" />
                <span className="checkmark-check"></span>
            </label>
        </>
    )
};

export default ListPositions;