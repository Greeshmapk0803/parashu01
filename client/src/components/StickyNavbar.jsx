import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom'
import { Link } from 'react-router-dom';
import FadeMenu from './FadeMenu';
import { categoryList1, categoryList2 } from '../constants';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HomeRoundedIcon, TipsAndUpdatesIcon, ModelTrainingIcon, QuizIcon } from '../assets/icons';

const topTextIcon = [
    { title: 'Home', icon: <HomeRoundedIcon sx={{ color: 'white' }} /> },
    { title: 'Ask AI', icon: <ModelTrainingIcon sx={{ color: 'white' }} /> },
    { title: 'Get Context', icon: <TipsAndUpdatesIcon sx={{ color: 'white' }} /> },
    { title: 'Quiz Me!', icon: <QuizIcon sx={{ color: 'white' }} /> },
]

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


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


export default function ElevateAppBar(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ElevationScroll {...props}>
            <AppBar position={'sticky'} sx={{ borderRadius: scrolled ? `100px` : `20px`, top: '2em', margin: { xs: '0px auto', md: '1em auto' }, width: 'max-content', border: '2px solid grey' }}>
                <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Zoom in={!scrolled} style={{ transitionDelay: !scrolled ? '100ms' : '0ms' }}>
                        <Typography variant="h6" text-align='center' component="div" sx={{ display: scrolled ? 'none' : 'flex', width: '100%', justifyContent: 'center', fontSize: '16px' }}>
                            Parashu...
                        </Typography>
                    </Zoom>
                    <Zoom in={scrolled} style={{ transitionDelay: scrolled ? '300ms' : '0ms' }}>
                        <Box sx={{ flexGrow: 1, display: { md: 'flex' }, flexDirection: { xs: 'row' }, justifyContent: 'center', display: scrolled ? 'flex' : 'none' }}>
                            {/* Buttons go here */}
                            {categoryList1.map((page) => (
                                <Link to={page.path} style={{ color: 'white', textDecoration: 'none' }}>
                                    <Button
                                        key={page}
                                        sx={{ my: 2, color: 'white', display: 'block', margin: '0 1em' }}
                                    >
                                        {page.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Zoom>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}
