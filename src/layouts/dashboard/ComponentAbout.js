// @mui
import { Card, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Iconify from '../../components/Iconify';
// utils

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

ComponentAbout.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function ComponentAbout({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
            height: 150,
        }}
      >
        {/* <input type="image" img src={icon} alt='my-picture' height={150} sx={{ borderRadius: '15px' }} /> */}
        <Avatar
            alt="Photo Annas Ismail"
            src={icon}
            sx={{ width: 150, height: 150 }}
            
        />
      </IconWrapperStyle>

      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

        <Grid container justifyContent='center' mt={2} gap={2} >
            <Link href="https://www.instagram.com/annas_i_m/" underline="none"  color="inherit" target="_blank">
                <Iconify icon="ant-design:instagram-filled" width={30} height={30} />
            </Link>
            <Link href="https://www.facebook.com/BPK.Annas/" underline="none" color="inherit" target="_blank">
                <Iconify icon="dashicons:facebook-alt" width={30} height={30} />
            </Link>
            <Link href="mailto:annasismailmuhammad@gmail.com" underline="none" color="inherit" target="_blank">
                <Iconify icon="bxl:gmail" width={30} height={30} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCWBDexy4KU6WrHwR74B-Nfg" underline="none" color="inherit" target="_blank">
                <Iconify icon="ant-design:youtube-filled" width={30} height={30} />
            </Link>
        </Grid>

      
    </Card>
  );
}
