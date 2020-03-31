import React from "react";

const FeaturedSpeaker = (props) => {
    function createBioMarkup(){
        return {__html: props.bio};
    }

    function createNameMarkup(){
        return {__html: props.name};
    }

    return (

        <div className="row">

            <div className="col-12 col-md-6 mod-img" style={{ backgroundImage: `url('${props.img}')` }}></div>

            <div className="arrow"></div>

            <div className="col-12 col-md-6 mod-text-c">
                
                <div className="mod-text">
                    <div>
                        <h5 dangerouslySetInnerHTML={createNameMarkup()}></h5>
                        <span dangerouslySetInnerHTML={createBioMarkup()}></span> 
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FeaturedSpeaker;