import PropTypes from 'prop-types';

// @mui
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogPostsSearch({ posts , setSearch }) {
  
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={posts}
      getOptionLabel={(post) => `${post.number.insurah} - ${post.text.read} - ${post.translation.id}`}
      isOptionEqualToValue={(option, value) => option.number.insurah === value.number.insurah}
      onChange={(e , v)=>{
        setSearch(v)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search Ayah..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
