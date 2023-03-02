import { useState, useEffect } from 'react';
import styled from 'styled-components';

function TagElement (props) {
    const [checked, setChecked] = useState(false);
    const [tagColor,setTagColor] = useState("#EFEFEF");
    const [disabled, setDisabled] = useState(false);
    
    const onClick = (event) => {
        if(checked){        /* When removed */
            setChecked(false);
            props.removeTag(props.tagOption);
            props.setTagCount(props.tagCount - 1);
            setTagColor("#EFEFEF");
        }
        else {
            setChecked(true);
            props.setTag(props.tagOption);
            props.setTagCount(props.tagCount + 1);
            setTagColor("#D9E7FF");
            if (props.isTagsFull() && checked){
                props.setCursor("text");
            }

        }
        console.log(checked);
        if (checked && props.isTagsFull()){
            props.setCursor("pointer");
        }
        else if(!checked && props.isTagsFull()){
            props.setCursor("text");
            event.preventDefault();
            disabled = !disabled;
            setDisabled(disabled)
        }
        else if(checked && !props.isTagsFull()){
            props.setCursor("pointer");
        }
        else if(!checked && !props.isTagsFull()){
            props.setCursor("pointer");
        }
            
    };
    const TagInput = styled.input`
        width: 100%;
        height:100%;
    `;

    const TagLabel = styled.label`
        background-color: ${tagColor};
        margin: 10px 10px 0 5px;
        padding: 10px 20px;
        display: inline-box;
        border-radius: 17px;
        cursor: ${props.cursor};

        &:hover {
            background-color: #D9E7FF;
        }
    `;

    return(
        <TagLabel for={props.tagOption} onClick={onClick}>
            {props.tagOption}
            <TagInput id={props.tagOption} type="checkbox" disabled={disabled} hidden></TagInput>
        </TagLabel>
    );
}     

export default TagElement;