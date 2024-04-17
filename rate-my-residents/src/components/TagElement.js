import { useState, useEffect } from 'react';
import styled from 'styled-components';

function TagElement (props) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      if(isChecked && !props.disabled){
        props.addTag(props.label);
        console.log('labe added!');
      } else if (!isChecked) {
        props.removeTag(props.label);
        console.log('label removed!');  // Too many action calls in the initial rerender of the page
      }
    }, [isChecked]);

    const onClick = (event) => {
      setIsChecked(event.target.checked);
    };

    return(
        <TagLabel htmlFor={props.label} isChecked={isChecked} disabled={props.disabled}>
            {props.label}
            <input id={props.label} type="checkbox" onClick={onClick} disabled={isChecked ? false : props.disabled} hidden></input>
        </TagLabel>
    );
}     

export default TagElement;

const TagLabel = styled.label`
  background-color: ${props => props.isChecked ? '#D9E7FF' : '#EFEFEF'};
  margin: 10px 10px 0 10px;
  padding: 10px 20px;
  display: inline-box;
  border-radius: 17px;
  cursor: ${props => props.disabled && !props.isChecked ? 'default' : 'pointer'};

${props => !props.disabled
  ?? `&:hover {
    background-color: #D9E7FF;
  }`
}
`;