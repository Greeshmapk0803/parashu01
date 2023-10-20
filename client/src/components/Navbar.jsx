import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { pages, settings, newsPages1, topTextIcon } from '../constants';


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
    <AppBar position="static" sx={{display:{xs:'none', md:'block'}}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '30px',
            }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Parashu
            </Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Parashu
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Link to='/home'>
              <Button
              sx={{
                m: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
                },
              }}>Home</Button>
            </Link>
          <Link to='/context'>
              <Button
              sx={{
                m: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
                },
              }}>Get Context</Button>
            </Link>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                m: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
                },
                }}
              >
                {page}
              </Button>
            ))}
            <Link to='/dnd'>
              <Button
              sx={{
                m: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
                },
              }}>Drag and Drop</Button>
            </Link>
            <Link to='/topics'>
              <Button
              sx={{
                m: 2,
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'black',
                  opacity: [0.9],
                },
              }}>Topics</Button>
            </Link>
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
                <Link to={setting.path}>
                  <MenuItem key={setting.action} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" sx={{color:'black', textDecoration:'none'}}>{setting.action}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
