import React from "react";
import useInfoColumns from "../../hooks/useInfoColumns";
import InfoMod from "./infoMod";

const InfoSection = () => {
    return(
        
        <div className="row" id="info-sec">
            {
                useInfoColumns().map((edge)=>{
                    let nd = edge.node;

                    return(
                        <InfoMod key={nd.title} name={nd.title} exc={nd.pageInfoBoxes.excerpt} pic={nd.featuredImage.sourceUrl} buttons={nd.pageInfoBoxes.buttons} />
                    )
                })
            }
        </div>

    );
}

export default InfoSection;