import { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import styled from 'styled-components';

function TagElement ({tag, handleClick}) {
    const [checked, setChecked] = useState(false);
    const [tagColor,setTagColor] = useState("#EFEFEF");
    
    const onClick = () => {
        setChecked(!checked);

        if (tagColor == "#EFEFEF")
            setTagColor("#D9E7FF");
        else
            setTagColor("#EFEFEF");
    };

    const TagWrapper = styled.div`
        background-color: ${tagColor};
        margin: 10px 10px 0 5px;
        padding: 10px 20px;
        display: inline-box;
        border-radius: 17px;
        cursor: pointer;
    `;

    return(
        <TagWrapper onClick={onClick}>
            <input name={tag}type="checkbox" hidden></input>
            <div aria-hidden="true" value="false">
                {tag}
            </div>
        </TagWrapper>
    );
}     





export default TagElement;