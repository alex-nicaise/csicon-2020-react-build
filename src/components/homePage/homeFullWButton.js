import React from "react";
import { Link } from "gatsby";

const HomeFullWButton = (props) =>{
    if(props.linkTo !== null){
        return (

        <div className="btn-row row">
            <Link to={props.linkTo} className="btn grey-button" id="speakers-btn">{props.text}</Link>
        </div>

    );
    }
    
}

export default HomeFullWButton;