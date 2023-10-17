import React from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';
import { Home, Landing, Login, Signup, Profile, News, NewsArticle } from './pages';
import {Navbar, TldrComponent, MobileAppbar, Footer, StickyNavbar} from './components';
import { newsPages } from './constants';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
      light: '#42a5f5',
      dark: '#0C0C0C',
      contrastText: '#fff',
    },
    secondary: {
      main: green[500],
    },
  },

  typography: {
    fontFamily: [
      'Gabarito',
      'serif',
    ].join(','),
  },
});


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "primary.dark", color:'whitesmoke' }}>
          <Navbar />
          <StickyNavbar />
          <MobileAppbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />

            {/* //news Endpoints */}
            {newsPages.map((page) => (
              <Route exact path={page.path} element={<News path={page.path} key={page.path} />} />
              ))}
              <Route exact path='/long' element={<NewsArticle style={{ color: "white" }} />} />
          </Routes>

          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
