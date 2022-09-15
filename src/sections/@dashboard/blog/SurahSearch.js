
// @mui
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});


export default function SurahSearch({ posts , setSearch }) {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={posts}
      getOptionLabel={(post) => `${post.number} - ${post.asma.id.short} - ${post.type.id}`}
      isOptionEqualToValue={(option, value) => option.number === value.number}
      onChange={(e)=>{
        setSearch(e.target.dataset.optionIndex)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search Surah..."
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
