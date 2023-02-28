import { useState } from 'react';
import styled from 'styled-components';

function TagElement ({tagOption, setTag}) {
    const [checked, setChecked] = useState(false);
    const [tagColor,setTagColor] = useState("#EFEFEF");

    const onClick = () => {
        setChecked(!checked);
        setTag(tagOption);

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
            <input name={tagOption}type="checkbox" hidden></input>
            <div aria-hidden="true" value="false">
                {tagOption}
            </div>
        </TagWrapper>
    );
}     





export default TagElement;