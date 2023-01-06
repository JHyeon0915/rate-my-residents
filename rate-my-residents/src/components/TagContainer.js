import TagElement from "./TagElement";
import { useState } from "react";

function TagContainer ({handleClick})  {
    const [data, setData] = useState('');
    const tags = ["pretty", "handsome", "cute", 
    "considerate", "mature", "imature", 
    "hard texter", "talkative", "bitch", 
    "oblivious"];
    const elements = [];

    tags.forEach((tag) => {
        elements.push(<TagElement tag={tag} handleClick={handleClick}/>)
    });

    return(
        <>
            <div>
                {elements}
            </div>
        </>

    );
}

export default TagContainer;