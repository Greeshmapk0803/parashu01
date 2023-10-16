import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HomeRoundedIcon, TipsAndUpdatesIcon, ModelTrainingIcon, QuizIcon } from '../assets/icons';

const topTextIcon = [
    { title: 'Home', icon: <HomeRoundedIcon sx={{ color: 'white' }} /> },
    { title: 'Ask AI', icon: <ModelTrainingIcon sx={{ color: 'white' }} /> },
    { title: 'Get Context', icon: <TipsAndUpdatesIcon sx={{ color: 'white' }} /> },
    { title: 'Quiz Me!', icon: <QuizIcon sx={{ color: 'white' }} /> },
]
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
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: 'primary.dark',
                color: 'white'
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to='/'>
                    {topTextIcon.map((text, index) => (
                        <ListItem key={index} disablePadding sx={{ color: 'whitesmoke', textDecoration: 'none' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Link>
            </List>
            <Divider />
            <List>
                {newsPages1.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={text.path} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                            <ListItemButton>
                                <ListItemText primary={text.title} sx={{ color: 'whitesmoke', textTransform: 'capitalize' }} />
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
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                            fontWeight: 500,
                            fontSize: '14px',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: 'black',
                                opacity: [0.9],
                            },
                        }}>More</Button>
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


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color={"inherit"} sx={{ top: 'auto', bottom: 0, widht: '100%', display:{md:'none'}, borderTop:'1px solid grey' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor:'primary.dark' }}>
                    <IconButton color="inherit" aria-label="open drawer">
                        <TemporaryDrawer />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'block', md: 'flex' },
                            fontFamily: 'monospace',
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
                                vertical: 'bottom',
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
            </AppBar>
        </>
    );
}