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
                <AppBar position={'sticky'} sx={{ borderRadius: scrolled ? `100px` : `20px`, top: '2em', margin: {xs: '0px auto',md:'1em auto'}, width:'max-content', border:'2px solid grey' }}>
                <Typography variant="g5" color="white" sx={{display:{md:'none'}, padding:'0.5em'}}>Topic</Typography>
                    <Toolbar sx={{ display:{xs: 'none', md: 'flex'}}}>
                        <Zoom in={!scrolled} style={{ transitionDelay: !scrolled ? '100ms' : '0ms' }}>
                            <Typography variant="h6" text-align='center' component="div" sx={{ display: scrolled ? 'none' : 'flex', width: '100%', justifyContent: 'center', fontSize:'16px' }}>
                                Your Headlines...
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
                                <FadeMenu options={categoryList2} text='More'/>
                            </Box>
                        </Zoom>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
    );
}
