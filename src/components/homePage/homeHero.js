import React from "react";

const HomeHero = (props) => {

    function createMarkup(){
        return{__html: props.content}
    }

    return(

<div id="promo-row" className="row">
    <div id="home-promo-img" className="col-12 col-md-6" style={{backgroundImage: `url(${props.link})`}}></div>
    <div className="col-12 col-md-6">
        <span dangerouslySetInnerHTML={createMarkup()}></span>
        <div id="promo-buttons">
            <a className="btn white-button" href="https://secure.centerforinquiry.net/csicon-2019-registration">Register Now</a>
        </div>
    </div>
</div>

    );
}

export default HomeHero;