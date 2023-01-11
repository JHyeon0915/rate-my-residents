import { useState } from 'react';
import styled from 'styled-components';

function TagElement ({tag, handleClick}) {
    const [checked, setChecked] = useState(false);
    const onClick = () => {
        setChecked(!checked);
        // if checked is true, change color
    };

    return(
        <Wrapper>
            <input name = {tag} type="checkbox"></input>
            <div aria-hidden="true" value="false" onClick={onClick}>{tag}</div>
            <button hidden="true" onClick={()=>{ if(checked) handleClick(tag)}}></button>
        </Wrapper>
    );
}     
 
const Wrapper = styled.div`
    background: #EFEFEF;
    margin: 10px 10px 0 5px;
    padding: 10px 15px;
    display: inline-box;
    border-radius: 15px;
`;


export default TagElement;