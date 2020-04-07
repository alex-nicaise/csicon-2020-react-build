import React from "react";

const InfoMod = (props) => {
    
    function createMarkup(){
        return {__html: props.exc}
    }

    return(

        <div className="col-12 col-lg-4">
            <div className="info-mod">
                <img src={props.pic}></img>
                <h4>{props.title}</h4>
                <span dangerouslySetInnerHTML={createMarkup()}></span>
                {
                    props.buttons.map((button)=>{
                        return(
                            <a key={button.buttonText} href={button.buttonLink} className={button.buttonStyle === "solid" ? "btn green-button" : "btn green-button-outline"}> {button.buttonText} </a>
                        )
                    })
                }
            </div>
        </div>

    );
}

export default InfoMod;