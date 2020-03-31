import React from "react";

const SchedEvent = (props) => {

    function createContentMarkup(){
        return{__html: props.info}
    }
    
    if (props.hasDesc === false){
        return(

            <div className="no-desc card">
                <div className="card-header" id={`${props.id}headingThree`}>
                    <p className="mb-0">
                        {props.startTime} | {props.title}                                   
                    </p>
                </div>
            </div>

        )
    } else {
        return (

            <div className="card">
                <div className="card-header" id={`${props.id}headingThree`}>
                    <p className="mb-0">
                        <button className="btn collapsed" type="button" data-toggle="collapse" data-target={`#${props.id}collapseThree`} aria-expanded="false" aria-controls={`${props.id}collapseThree`}>                        
                            {props.startTime} - {props.endTime} | {props.title} <i className="fas fa-ticket-alt"></i>                  
                        </button>                
                    </p>
                </div>
                <div id={`${props.id}collapseThree`} className="collapse" aria-labelledby={`${props.id}headingThree`} data-parent={`#accordion${props.accNum}`}>
                    <div className="card-body">
                        <span dangerouslySetInnerHTML={createContentMarkup()}></span>                    
                    
                        <hr></hr>
                        
                        <p className="mt-3" style={{textAlign: "center"}}><em>Presented by</em></p>


                        {props.speakers.map(speaker =>{
                            let nd = speaker.node;
                            
                            return(

                                <div className="presenter mt-3" key={nd.speakerId}>
                                    <a href="https://csiconference.org/speakers/#edward-mark">
                                        <div className="img-fit mr-3" id="speaker-one" style={{backgroundImage: `url(${nd.speakers.speakerImage.sourceUrl})`}}></div>
                                    </a>
                                    <div className="presenter-info">
                                        <a href="https://csiconference.org/speakers/#edward-mark"><h5>{nd.name}</h5></a>
                                        <p className="small">{nd.speakers.shortBio}</p>
                                    </div>
                                </div>    

                            )
                        })}

                        
                    </div>
                </div>
            </div>

        )
    }
    
}

export default SchedEvent;