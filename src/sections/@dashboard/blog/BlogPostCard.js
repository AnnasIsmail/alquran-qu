import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Avatar, Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
//
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: 'calc(100% * 1 / 20)',
  paddingBottom: 'calc(100% * 1 / 25)',
}));

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 1,
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { number , ayahCount , asma , type } = post;
  const latestPostLarge = index === -1;
  const latestPost = index === -2;

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            bgcolor: 'primary.main',
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
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <AvatarStyle
            alt={asma.id.long}

            src={(type.id === "Makkiyyah")?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3wWK8pbaqHo141c0nXzJpNVwY-T9-Tvalkha4My6bQ&s":"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/01/42811862.jpg"}

            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <Typography gutterBottom variant="h5" sx={{ p: 2, zIndex: 9, color: 'background.paper', textAlign: 'right' }} >
            {asma.ar.short}
          </Typography>
          
          {/* <CoverImgStyle  alt={title} src={cover} /> */}

        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {asma.translation.id}
          </Typography>

          <TitleStyle
            to={`detail-surah/${number}`}
            component={RouterLink}
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {asma.id.short}
          </TitleStyle>

              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
                  }),
                }}
              >
                {/* <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} /> */}
                <Typography variant="caption" color= 'text.secondary'>{ayahCount} Ayat</Typography>
                <Typography variant="caption" color= 'text.secondary'><pre> - </pre></Typography>
                <Typography variant="caption" color= 'text.secondary'>{type.id}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
