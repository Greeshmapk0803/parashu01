import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import FadeMenu from './FadeMenu'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const pages = ['Home', 'Categories', 'Ask AI', 'Get Context', 'Quiz Me'];
const settings = ['Profile', 'Dashboard', 'Logout'];
const newsPages1 = [
  { "title": "arts", "path": "/arts" },
  { "title": "automobiles", "path": "/automobiles" },
  { "title": "books/review", "path": "/books-review" },
  { "title": "business", "path": "/business" },
  { "title": "fashion", "path": "/fashion" },
  { "title": "food", "path": "/food" },
  { "title": "health", "path": "/health" },
  { "title": "home", "path": "/home" },
  { "title": "insider", "path": "/insider" },
  { "title": "magazine", "path": "/magazine" },
  { "title": "movies", "path": "/movies" },
  { "title": "nyregion", "path": "/nyregion" },
  { "title": "obituaries", "path": "/obituaries" },
  { "title": "opinion", "path": "/opinion" },
  { "title": "politics", "path": "/politics" },
  { "title": "realestate", "path": "/realestate" },
  { "title": "science", "path": "/science" },
  { "title": "sports", "path": "/sports" },
  { "title": "sundayreview", "path": "/sundayreview" },
  { "title": "technology", "path": "/technology" },
  { "title": "theater", "path": "/theater" },
  { "title": "t-magazine", "path": "/t-magazine" },
  { "title": "travel", "path": "/travel" },
  { "title": "upshot", "path": "/upshot" },
  { "title": "us", "path": "/us" },
  { "title": "world", "path": "/world" }
];




export function TemporaryDrawer() {
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }

      setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
      <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
      >
          <List>
              <Link to='/'>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
              </Link>
              {['Ask AI', 'Get Context', 'Quiz Me!'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                      </ListItemButton>
                  </ListItem>
              ))}
          </List>
          <Divider />
          <List>
              {newsPages1.map((text, index) => (
                  <ListItem key={index} disablePadding>
                      <Link to={text.path} style={{textDecoration:'none', color:'black', width:'100%'}}>
                        <ListItemButton>
                            <ListItemText primary={text.title} />
                        </ListItemButton>
                      </Link>
                  </ListItem>
              ))}
          </List>
      </Box>
  );

  return (
      <div>
          {['right'].map((anchor) => (
              <>
                  <Button onClick={toggleDrawer('right', true)}
                  sx={{ my: 2, 
                  color: 'white', 
                  display: 'block', 
                  margin:'0 1em',
                  fontWeight: 500,
                  fontSize: '14px',
                  '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
              }, }}>More</Button>
                  <Drawer
                      anchor={'right'}
                      open={state['right']}
                      onClose={toggleDrawer('right', false)}
                  >
                      {list('right')}
                  </Drawer>
              </>
          ))}
      </div>
  );
}


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/' style={{textDecoration:'none', color: 'white'}}>
              Parashu
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontSize:'12px' }}>
            <TemporaryDrawer />
          </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to='/' style={{textDecoration:'none', color: 'white'}}>
              Parashu
              </Link>
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, 
                  color: 'white', 
                  display: 'block', 
                  margin:'0 1em',
                  fontWeight: 500,
                  fontSize: '14px',
                  '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
              }, }}
              >
                {page}
              </Button>
            ))}
            <TemporaryDrawer />
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
