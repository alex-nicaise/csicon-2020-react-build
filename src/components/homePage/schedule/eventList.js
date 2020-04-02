import React from "react";

import useThursdaySchedule from "../../../hooks/useThursdaySchedule";
import useFridaySchedule from "../../../hooks/useFridaySchedule";
import useSaturdaySchedule from "../../../hooks/useSaturdaySchedule";
import useSundaySchedule from "../../../hooks/useSundaySchedule";
import SchedEvent from "./schedEvent";

const EventList = (props) => {

    const days = {
        weekThursday: useThursdaySchedule(),
        weekFriday: useFridaySchedule(),
        weekSaturday: useSaturdaySchedule(),
        weekSunday: useSundaySchedule()
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