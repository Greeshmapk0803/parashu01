import Navbar from './components/Navbar';
import StickyNavbar from './components/StickyNavbar';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import { green} from '@mui/material/colors';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import {Home, Landing, Login, Signup, Profile, News} from './pages';



const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
      light: '#42a5f5',
      dark: '#1565c0',
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
        <Navbar />
        <Box sx={{
          width: { xs: '90%', md:'max-content' },
          margin: 'auto',
          height: '50vh',
          top: '8px',
        }}
        >
          <StickyNavbar />
        </Box>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <News />
        <Footer />
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
