import { useState } from 'react';
import RatingMui from '@mui/material/Rating';

function RatingSlider(props){
    const [value, setValue] = useState(0);

    return(
      <>
        <h3></h3>
        <RatingMui
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
            props.setRate(newValue)
          }}
        />
      </>
    );
}

export default RatingSlider;