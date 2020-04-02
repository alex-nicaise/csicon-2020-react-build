import React from "react";
import EventList from "./eventList";

class ScheduleContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected: {
                day: "weekThursday",
                accNum: "Zero",
                date: "Thursday, October 17th"
            }
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({selected: {
            day: "weekThursday",
            accNum: "Zero",
            date: "Thursday, October 17th"
        }})
    }

    handleClick(e){
        e.preventDefault();
        this.setState({selected: {
            day: e.target.id,
            accNum: e.target.name,
            date: e.target.value
        }});
    }
    
    render(){
        return(

            <>
            <div className="row" style={{justifyContent: "center"}}>
                <button 
                    id="weekThursday" 
                    name="Zero" 
                    value="Thursday, October 17th" 
                    onClick={this.handleClick} 
                    className={this.state.selected.day === "weekThursday" ? "btn light-green-button" : "btn light-purp-button"}>OCT. 17</button>

                <button 
                    id="weekFriday" 
                    name="One" 
                    value="Friday, October 18th" 
                    onClick={this.handleClick} 
                    className={this.state.selected.day === "weekFriday" ? "btn light-green-button" : "btn light-purp-button"}>OCT. 18</button>

                <button 
                    id="weekSaturday" 
                    name="Two" 
                    value="Saturday, October 19th" 
                    onClick={this.handleClick} 
                    className={this.state.selected.day === "weekSaturday" ? "btn light-green-button" : "btn light-purp-button"}>OCT. 19</button>

                <button 
                    id="weekSunday" 
                    name="Three" 
                    value="Sunday, October 20th" 
                    onClick={this.handleClick} 
                    className={this.state.selected.day === "weekSunday" ? "btn light-green-button" : "btn light-purp-button"}>OCT. 20</button>

            </div>
            <div className="row">
                <EventList accNum={this.state.selected.accNum} day={this.state.selected.day} date={this.state.selected.date} />
            </div>
            </>

        )
    }
}

export default ScheduleContainer;