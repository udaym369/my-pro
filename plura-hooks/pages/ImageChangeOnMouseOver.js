import React from "react";
import ImageToggleOnMouseOver from "../src/imageToggleOnMouseOver";

const ImageChangeOnMouseOver=()=>{
    return(
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg"
                                    secondaryImg="/static/speakers/Speaker-187.jpg"
                                    alt="heloo"/>&nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-823.jpg"
                                    secondaryImg="/static/speakers/Speaker-823.jpg"
                                    alt="hi"/>
        
        </div>
        
    );
};
export default ImageChangeOnMouseOver;