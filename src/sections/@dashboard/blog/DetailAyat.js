import PropTypes from 'prop-types';
// material
import { Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')(({ theme }) => ({
  position: 'relative',
//   paddingTop: 'calc(100% * 1 / 20)',
//   paddingBottom: 'calc(100% * 1 / 25)',
}));

const TitleStyle = styled(Link)({
  minHeight: 44,
  overflow: 'hidden',
  display: '-webkit-box',
  textAlign: 'justify',
  WebkitBoxOrient: 'vertical',
});

// ----------------------------------------------------------------------

DetailAyat.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function DetailAyat({ post, index, namaSurah }) {
  const { number , juz , text , translation , tafsir , audio  } = post;
  const latestPostLarge = index === -1;
  const latestPost = index === -2;

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            bgcolor: 'paper',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: 'primary.lighter',
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >

          <Typography gutterBottom variant="h4" sx={{ p: 2, zIndex: 9, textAlign: 'right' }} >
            {text.ar}
          </Typography>
          
          {/* <CoverImgStyle  alt={title} src={cover} /> */}

        </CardMediaStyle>

        <CardContent
          sx={{
            py: 0,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block', textAlign: 'justify' }}>
            {text.read}
          </Typography>

          <TitleStyle
            // to="#"
            color="inherit"
            variant="subtitle2"
            underline="none"
            // component={RouterLink}
          >
            {translation.id}
          </TitleStyle>

              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  pt: 1,
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
                  }),
                }}
              >
                {/* <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} /> */}
                <Typography variant="caption">Juz {juz}</Typography>
                <Typography variant="caption"><pre> - </pre></Typography>
                <Typography variant="caption">{namaSurah}</Typography>
                <Typography variant="caption"><pre> - </pre></Typography>
                <Typography variant="caption">Ayat {number.insurah}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
