import { useState, useEffect } from 'react';
import styled from 'styled-components';

function TagElement (props) {
    const [tagColor,setTagColor] = useState("#EFEFEF");
    const [disabled, setDisabled] = useState(false);

    const onClick = (event) => {
        const isChecked = event.target.checked;

        if(isChecked){
            props.addTag(props.label);
            console.log('labe added!');
            setTagColor("#D9E7FF");
        } else {
            props.removeTag(props.label);
            console.log('label removed!');
            setTagColor("#EFEFEF");
        }
    };

    return(
        <TagLabel htmlFor={props.label} bgColor={tagColor}>
            {props.label}
            <TagInput id={props.label} type="checkbox" onClick={onClick} disabled={disabled} hidden></TagInput>
        </TagLabel>
    );
}     

export default TagElement;

const TagLabel = styled.label`
  background-color: ${props => props.bgColor || '#EFEFEF'};
  margin: 10px 10px 0 10px;
  padding: 10px 20px;
  display: inline-box;
  border-radius: 17px;
  cursor: pointer;

&:hover {
  background-color: #D9E7FF;
}
`;

const TagInput = styled.input`
  width: 100%;
  height:100%;
`;