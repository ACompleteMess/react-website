import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it } from 'vitest';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ColorModeContext } from './colorModeContext';

function AppWithProviders() {
  const theme = createTheme({ palette: { mode: 'light' } });
  return (
    <ColorModeContext.Provider value={{ toggleColorMode: () => {} }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

describe('App', () => {
  it('renders the main sections and name', () => {
    render(<AppWithProviders />);
    expect(screen.getByText(/Erik Stuble/i)).toBeInTheDocument();
    expect(screen.getByText(/Professional Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills & Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Professional Involvement/i)).toBeInTheDocument();
  });
}); 