import TagElement from "./TagElement";
import { useState } from "react";
import styled from "styled-components";

function TagContainer ({setTag})  {
    const [numOfTag, setNumOfTag] = useState(0)
    const tagOptions = ["Pretty", "Handsome", "Cute", 
    "Considerate", "Mature", "Imature", 
    "Hard texter", "Talkative", "Bitch", 
    "Oblivious", "Caring", "Wweet", "Son of a Bitch"];
    const elements = [];

    tagOptions.forEach((tagOption) => {
        elements.push(<TagElement tagOption={tagOption} setTag={setTag}/>)
    });


    return(
        <Wrapper>
            <div><b>Select up to 3 tags</b></div>
            {elements}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 886px;
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    border: 1px solid #D7D7D7;
    box-shadow: 0px 5px 10px #D7D7D7;
    border-radius: 5px;
    margin: 15px 0px;
`;

export default TagContainer;