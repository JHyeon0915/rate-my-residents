import TagElement from "./TagElement";
import { useState } from "react";
import styled from "styled-components";

function TagContainer ({handleClick})  {
    const [data, setData] = useState('');
    const tags = ["pretty", "handsome", "cute", 
    "considerate", "mature", "imature", 
    "hard texter", "talkative", "bitch", 
    "oblivious", "caring", "sweet", "son of a bitch"];
    const elements = [];

    tags.forEach((tag) => {
        elements.push(<TagElement tag={tag} handleClick={handleClick}/>)
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