// @mui
import { Box, Button, Card, CardHeader, Divider, Link, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// utils
// import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};


export default function AppNewsUpdate({ id, tanggal, title, subheader, list, besok, kemarin, ...other }) {
  
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
      <Button sx={{ mr: 5 }} size="small" color="inherit" onClick={()=>kemarin()} startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} />}>
          Kemarin
        </Button>
        <Button size="small" color="inherit" onClick={()=>besok()} endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          Besok
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { title, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} /> */}

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle1" underline="hover" noWrap>
          {title}
        </Link>

        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography> */}
      </Box>

      <Typography variant="subtitle1" sx={{ pr: 3, flexShrink: 0 }}>
        {/* {fToNow(postedAt)} */}
        {postedAt}
      </Typography>
    </Stack>
  );
}
