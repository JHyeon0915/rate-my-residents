import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import residentsInfo from '../data/residentsInfo';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function FreeSolo() {
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      e.preventDefault();
      navigate('/result', {state:{name: e.target.value}})
    }
  }

  return (
    <Stack spacing={2} sx={{ padding:0, margin: 0 }}>
      <Autocomplete
        id="auto-complete-search"
        freeSolo
        options={residents}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <form>
              <PersonalInput 
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

const residents = residentsInfo;

const PersonalInput = styled.input`
  border-radius: 50px;
  width: 545px;
  height: 56px;
  font-size: 20px;
`;