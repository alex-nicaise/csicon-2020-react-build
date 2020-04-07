import React from "react";
import LayoutAlt from "../components/layout-alt";
import useAllSpeakers from "../hooks/useAllSpeakers";
import SpeakerMod from "../components/speakersPage/speakerMod";
import PageHeader from "../components/pageHeader";

const FullSpeakers = () => {
    return (

        <div className="page-template-speakers-page">
            <LayoutAlt>

                <div className="row page-row no-stretch">
                    <div className="col-12 col-lg-8">
                
                        <PageHeader text="Speakers" />

                        {useAllSpeakers().map(edge => {
                            let nd = edge.node;

                            if (nd.speakers.speakerImage !== null){
                                return(

                                    <SpeakerMod 
                                    key={nd.id} 
                                    slug={nd.slug} 
                                    pic={nd.speakers.speakerImage.sourceUrl}
                                    name={nd.name}
                                    bio={nd.description} />

                                );
                            } else {
                                return(

                                    <SpeakerMod 
                                    key={nd.id} 
                                    slug={nd.slug} 
                                    name={nd.name}
                                    bio={nd.description} />

                                )
                            }
                                                        
                        })}

                    </div>
                </div>

            </LayoutAlt>
        </div>

    )
}

export default FullSpeakers;