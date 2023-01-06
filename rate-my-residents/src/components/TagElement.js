import { useState } from 'react';

function TagElement ({tag, handleClick}) {
    const [checked, setChecked] = useState(false);
    const onClick = () => {
        setChecked(!checked);
        // if checked is true, change color
    };

    return(
        <div>
            <input name = {tag} type="checkbox"></input>
            <div aria-hidden="true" value="false" onClick={onClick}>{tag}</div>
            <button hidden="true" onClick={()=>{ if(checked) handleClick(tag)}}></button>
        </div>
    );
}

export default TagElement;