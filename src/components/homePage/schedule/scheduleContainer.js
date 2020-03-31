import React from "react";
import EventList from "./eventList";

class ScheduleContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weekThursday: {
                selected: false,
                accNum: "Zero"
            }, 
            weekFriday: {
                selected: false,
                accNum: "One"
            }, 
            weekSaturday: {
                selected: false,
                accNum: "Two"
            }, 
            weekSunday: {
                selected: false,
                accNum: "Three"
            }
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({weekThursday: { selected: true, accNum: "Zero" }})
    }

    handleClick(e){
        e.preventDefault();
        for (let s in this.state){
            if (this.state[s] === this.state[e.target.id]){
                this.setState(() => this.state[s].selected = true)
            } else {
                this.setState(() => this.state[s].selected = false)
            }
        }
    }
    
    render(){
        return(

            <>
            <div className="row">
                <button id="weekThursday" onClick={this.handleClick} className={this.state.weekThursday.selected === true ? "btn light-green-button" : "btn light-purp-button"}>OCT. 17</button>
                <button id="weekFriday" onClick={this.handleClick} className={this.state.weekFriday.selected === true ? "btn light-green-button" : "btn light-purp-button"}>OCT. 18</button>
                <button id="weekSaturday" onClick={this.handleClick} className={this.state.weekSaturday.selected === true ? "btn light-green-button" : "btn light-purp-button"}>OCT. 19</button>
                <button id="weekSunday" onClick={this.handleClick} className={this.state.weekSunday.selected === true ? "btn light-green-button" : "btn light-purp-button"}>OCT. 20</button>
            </div>
            <div className="row">
                <EventList accNum="One" day="friday" date="Friday, October 18th" />
            </div>
            </>

        )
    }
}

export default ScheduleContainer;