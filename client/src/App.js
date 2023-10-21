import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
// eslint-disable-next-line
import { Home, Landing, Login, Signup, Profile, News, NewsArticle, Newscontext, ContextResult, Chat, Profie } from './pages';
import { Navbar, MobileAppbar, Footer, StickyNavbar, DragAndDrop, TopicGrid, InitialLoader } from './components';
import { newsPages } from './constants';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProgressBar from "./components/TopProgressBar"

function App() {
  const [intialize, setIntialize] = useState(true)//loader state

  useEffect(() => {
    setTimeout(() => {
      setIntialize(false)
    }, 2000)
  }, [])

  return (
    <>
      {intialize &&
        <Box sx={{ backgroundColor: "primary.dark", color: 'whitesmoke' }}>
          <InitialLoader />
        </Box>
      }
      {!intialize && <Router>
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
            <Route exact path='/profile' element={<Profile style={{ color: "white" }} />} />
            <Route exact path='/get' element={<Login style={{ color: "white" }} />} />
            {/* <Route exact path='/chat' element={<Chat style={{ color: "white" }} />} /> */}
          </Routes>
          <Footer />
        </Box>
      </Router>}
    </>
  );
}

export default App;
