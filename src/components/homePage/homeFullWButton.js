import React from "react";

const HomeFullWButton = (props) =>{
    return (

        <div className="btn-row row">
            <a href={props.link} className="btn grey-button" id="speakers-btn">{props.text}</a>
        </div>

    );
}

export default HomeFullWButton;