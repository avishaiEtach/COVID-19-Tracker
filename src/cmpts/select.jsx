import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setCountryName } from "../store/countries.action";

export default function BasicSelect( {countries,title}) {
  const [country, setCountry] = React.useState('');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setCountryName(event.target.value)); 
    setCountry((prevCountry) => (prevCountry = event.target.value))

  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'worldwide'}>Worldwide</MenuItem>
         {countries.map((country,idx) => <MenuItem key={idx} value={country}>{country}</MenuItem>)}

        </Select>
      </FormControl>
    </Box>
  );
}