import Navbar from './components/Navbar';
import StickyNavbar from './components/StickyNavbar';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
  Link
} from "react-router-dom";
import { Home, Landing, Login, Signup, Profile, News } from './pages';
import { newsPages } from './constants';



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
      'Jost',
      'cursive',
    ].join(','),
  },
});




function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:"primary.dark"}}>
          <Navbar />
          <StickyNavbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            {/* //news Endpoints */}
            {newsPages.map((page) => (
              <Route exact path={page.path} element={<News path={page.path} key={page.path} />} />
            ))}
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
