import React from "react";
import useFeaturedSpeakers from "../../hooks/useFeaturedSpeakers";
import FeaturedSpeaker from "./featuredSpeaker";

const FeaturedContainer = () =>{
    
    return (
        
        useFeaturedSpeakers().map(edge => {
            let nd = edge.node;

            return (

                <FeaturedSpeaker 
                key={nd.id} 
                name={nd.name} 
                bio={nd.description} 
                img={nd.speakers.speakerImage.sourceUrl} />

            );

        })

    );
}

export default FeaturedContainer;