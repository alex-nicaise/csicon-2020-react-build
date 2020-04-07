import React from "react";

const SpeakerMod = (props) => {

    function createDescMarkup(){
        return{__html: props.bio}
    }

    return(

        <div id={props.slug} className="row speaker-row">
            <div className="speaker-img" style={{backgroundImage: `url(${props.pic})`}}></div>
            <div className="col-12 col-md-7 speaker-bio">
                <p><strong>{props.name}</strong></p>
                <span dangerouslySetInnerHTML={createDescMarkup()}></span>                  
            </div>
            <hr></hr>
        </div>
    
    )
}

export default SpeakerMod;