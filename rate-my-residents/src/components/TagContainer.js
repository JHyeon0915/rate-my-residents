import TagElement from "./TagElement";
import { useEffect, useState } from "react";
import styled from "styled-components";

function TagContainer (props)  {
    const tagOptions = [
      "Pretty", "Handsome", "Cute", 
      "Considerate", "Mature", "Imature", 
      "Hard texter", "Talkative", "Bitch", 
      "Oblivious", "Caring", "Sweet", "Son of a Bitch",
    ];
    const [isCheckedList, setIsCheckedList] = useState(Array(tagOptions.length).fill(false));
    const [cursor, setCursor] = useState("pointer");
    const tagObject = {};
    
    return(
        <Wrapper>
            <div><b>Select up to 3 tags</b></div>
            {
                tagOptions.map((tag, index) =>
                    <TagElement
                        label={tag} 
                        setCursor={setCursor} 
                        cursor={cursor}
                        addTag={props.addTag}
                        removeTag={props.removeTag}
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