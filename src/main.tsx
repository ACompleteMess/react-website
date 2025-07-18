import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ColorModeContext } from './colorModeContext';

function Main() {
  const [mode, setMode] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
