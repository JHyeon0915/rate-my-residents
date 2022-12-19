import { useState } from 'react';
import RatingMui from '@mui/material/Rating';

function RatingSlider(){
    const [value, setValue] = useState(0);

    return(
    <>
        <RatingMui
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
    </>
    );
}

export default RatingSlider;