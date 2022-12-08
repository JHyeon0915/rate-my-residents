import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import residentsInfo from '../data/residentsInfo';
import {Outlet, Link, Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function FreeSolo() {
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      e.preventDefault();
      let value = residents.filter(resident => resident.name === e.target.value)
      console.log(value[0])
      navigate('/result', {state:value[0]})
    }
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="auto-complete-search"
        freeSolo
        options={residents.map((resident) => resident.name)}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <form>
              <input 
                type="text" 
                {...params.inputProps}
                onKeyDown={handleKeyDown}
              />
            </form>
          </div>
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const residents = residentsInfo;