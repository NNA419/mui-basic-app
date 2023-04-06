import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CssBaseline } from '@mui/material';
import Login from './pages/Login';
import { AuthProvider } from './Context/AuthContext';
// import DetailPage from './pages/DetailPage';
import RequireAuth from './hook/RequireAuth';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}



function App() {
    const [mode, setMode] = React.useState("light");
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      []
    );

    const theme = React.useMemo(
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
          <AuthProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<HomePage />} />
                {/* <Route path="/detailPage/:dataId" element={<HomePage />} /> */}
              </Route>
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/detailPage/:dataId" element={<RequireAuth />} />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default App