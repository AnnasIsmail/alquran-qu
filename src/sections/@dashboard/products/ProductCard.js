import PropTypes from 'prop-types';
// material
import { Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
// components

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { nama , riwayat , lafal , transliterasi , arti } = product;

  return (
    <Card>
      {/* <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box> */}

      <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h6">
            {nama}
          </Typography>

          <Typography variant="h4" sx={{ pt: 2 , textAlign: 'justify', direction: 'rtl'  }}>
            {lafal}
          </Typography>

          <Typography variant="subtitle2"  textAlign='justify' color= 'text.secondary' >
            {transliterasi}
          </Typography>

          <Typography variant="subtitle1" sx={{ pt: 1 ,  textAlign: 'justify' }}>
            {arti}
          </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2" color= 'text.disabled'>
            {riwayat}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
