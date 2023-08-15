import { useState } from "react";
import React from 'react';
import styled from "styled-components";

function RatingRadioButton(props){
    const [select, setSelect] = useState('');
    
    const handleChange = (event) => {
      const value = event.target.value;
      setSelect(value);
      props.setRate(value);
    };

    return(
        <Wrapper>
            <Item>
            <RadioButton
              type="radio"
              name="radio"
              value="yes"
              checked={select === "yes"}
              onChange={(event) => handleChange(event)}
            />
            <RadioButtonLabel />
            <div>Yes</div>
            </Item>
            <Item>
                <RadioButton
                    type="radio"
                    name="radio"
                    value="no"
                    checked={select === "no"}
                    onChange={(event) => handleChange(event)}
                />
                <RadioButtonLabel />
                <div>No</div>
            </Item>
      </Wrapper>
    );
}

const Wrapper =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 90%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  float: left;
`;
// float: left - added to make radioactive horizonal

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #db7290;
      border: 1px solid #db7290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;


export default RatingRadioButton;

