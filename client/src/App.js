import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';
import { Home, Landing, Login, Signup, Profile, News, NewsArticle, Newscontext, ContextResult } from './pages';
import { Navbar, MobileAppbar, Footer, StickyNavbar, DragAndDrop, TopicGrid, LoadingQuotes, InitialLoader } from './components';
import { newsPages } from './constants';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProgressBar from "./components/TopProgressBar"


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
  
  const [intialize, setIntialize] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIntialize(false)
    }, 2000)
  }, [])

  return (
    <>
      {intialize &&
        <ThemeProvider theme={theme}>
          <Box sx={{ backgroundColor: "primary.dark", color: 'whitesmoke' }}>
            <InitialLoader/>
          </Box>
        </ThemeProvider>}
      {!intialize && <Router>
        <ThemeProvider theme={theme}>
          <Box sx={{ backgroundColor: "primary.dark", color: 'whitesmoke' }}>
            <ProgressBar duration={"0.2"} height="3.5" bgcolor="#701ac1" />
            <Navbar />
            <StickyNavbar />
            <MobileAppbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dnd" element={<DragAndDrop />} />
              {/* //news Endpoints */}
              {newsPages.map((page) => (
                <Route exact path={page.path} element={<News path={page.path} key={page.path} />} />
              ))}
              <Route exact path='/long' element={<NewsArticle style={{ color: "white" }} />} />
              <Route exact path='/topics' element={<TopicGrid style={{ color: "white" }} />} />
              <Route exact path='/context' element={<Newscontext style={{ color: "white" }} />} />
              <Route exact path='/context/result' element={<ContextResult style={{ color: "white" }} />} />
              <Route exact path='/initial' element={<InitialLoader/>} />
            </Routes>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>}
    </>
  );
}

export default App;
