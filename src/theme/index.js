import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
//
import componentsOverride from './overrides';
import palette from './palette';
import paletteDark from './paletteDark';
import shadows, { customShadows } from './shadows';
import typography from './typography';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {

  const tema = 'dark';  

  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  const themeOptionsDark = useMemo(
    () => ({
      palette: paletteDark,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  let theme ;

  if(tema === 'dark'){
    console.log('masuk')
    theme = createTheme(themeOptionsDark);
  }else{
    theme = createTheme(themeOptions);
  }


  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
