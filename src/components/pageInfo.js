import React from "react";

const PageInfo = (props) => {

    function createMarkup(){
        return{__html: props.content}
    }

    return (
        <span dangerouslySetInnerHTML={createMarkup()}></span>
    )
}

export default PageInfo;