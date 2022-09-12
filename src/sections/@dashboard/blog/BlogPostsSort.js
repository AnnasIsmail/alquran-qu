import PropTypes from 'prop-types';
import React from 'react';
// material
import { MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default function BlogPostsSort({ options, onSort, changeView }) {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    const view = event.target.value
    setAge(view);
    changeView(view);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
      <InputLabel id="demo-simple-select-label">View</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={age}
        value={age}
        label="View"
        onChange={handleChange}
        sx={{ minWidth: 120 }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
  );
}
