import TagElement from "./TagElement";
import { useEffect, useState } from "react";
import styled from "styled-components";

function TagContainer (props)  {
    const LIMIT = 3;
    const tagOptions = [
      "Pretty", "Handsome", "Cute", 
      "Considerate", "Mature", "Imature", 
      "Hard texter", "Talkative", "Bitch", 
      "Oblivious", "Caring", "Sweet", "Son of a Bitch",
    ];
    
    const [disabled, setDisabled] = useState(false);
    
    useEffect(()=>{
        const tagObject = {};

        if (props.tags.length === LIMIT){
            setDisabled(true);
        } else {
            setDisabled(false);
        }
        
        for(var i=0;i<tagOptions.length;i++){
            tagObject[tagOptions[i]] = props.tags.includes(tagOptions[i]);
        }

    }, [tagOptions, props.tags.length]);

    return(
        <Wrapper>
            <div><b>Select up to 3 tags</b></div>
            {
                tagOptions.map((tag) =>
                    <TagElement
                        label={tag}
                        addTag={props.addTag}
                        removeTag={props.removeTag}
                        disabled={disabled}
                    />
                )
            }
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