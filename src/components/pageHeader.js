import React from "react";

const PageHeader = (props) =>{

    return(

        <div className="page-header">
          <hr></hr>
          <h1><strong>{props.text}</strong></h1>
        </div>

    )

}

export default PageHeader;