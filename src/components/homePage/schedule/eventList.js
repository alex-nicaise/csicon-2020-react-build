import React from "react";
import useFridaySchedule from "../../../hooks/useFridaySchedule";
import SchedEvent from "./schedEvent";

const EventList = (props) => {

    const days = {
        friday: useFridaySchedule(),
        //saturday: useSaturdaySchedule(),
        //sunday: useSundaySchedule()
    }

    return(

        <div className="col-12">
            <div className="accordion" id={`accordion${props.accNum}`}>
                <div className="card no-desc" id={`${props.accNum}heading${props.accNum}`}>
                    <div className="card-header">
                        <p className="mb-0">
                            <strong>{props.date}</strong>
                        </p>
                    </div>  
                </div>
                
                {days[props.day].edges.map(edge => {
                    let nd = edge.node;

                    return (
                        <SchedEvent 
                        hasDesc={nd.content === null ? false : true}
                        startTime={nd.conferenceEvents.startTime}
                        endTime = {nd.conferenceEvents.endTime}
                        title={nd.title}
                        content={nd.content}
                        info={nd.content}
                        speakers={nd.speakers.edges}
                        id={nd.id}
                        key={nd.id}
                        accNum={props.accNum} />
                    )
                })} 
            </div>
            
        </div>

    );
}

export default EventList;