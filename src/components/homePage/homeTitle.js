import React from "react";

const HomeTitle= (props) => {
    return(

        <div className="home-header">
              <h1 id={props.id}><strong>{props.title}</strong></h1>
              <hr></hr>
        </div>

    );
}

export default HomeTitle;