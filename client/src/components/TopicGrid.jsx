import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { newsPages } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
    const location = useLocation();

    useEffect(() => {//change th edocument title on load
        document.title = `Parashu | Choose a Category`;//setting the document title dynamically
    }, []);

    return (
        <>
            {location.pathname==='/topics' ? (<Typography variant="h3" sx={{textAlign:'center'}}>Categories</Typography>) : (null)}
            {location.pathname==='/home' ? (<Typography variant="h6" sx={{textAlign:'center'}}>Jump to</Typography>) : (null)}
            <Container maxWidth='xl' sx={{  border:location.pathname ==='/home' ? '2px solid gray' : '0',
                                            borderRadius:location.pathname==='/home' ? '10px' : '0',
                                            marginBottom:location.pathname==='/home' ? '2em': '0',
                                            flexGrow: 1, 
                                            margin: '', 
                                            minHeight: location.pathname==='/home' ? '20vh':'70vh', 
                                            display: 'flex', 
                                            alignItems: 'center' }}>
                <Grid container spacing={3} sx={{ margin: { xs: '0', md: ' 0 3em' } }}>
                    {newsPages.map((value, index) => (
                        <Grid xs="auto" key={index} sx={{ margin: '' }}>
                            <Link to={value.path} style={{ textDecoration: 'none', }}>
                                <Item sx={{
                                    backgroundColor: '#35293f',
                                    color: 'whitesmoke',
                                    textTransform: 'capitalize',
                                    borderRadius: '12px',
                                    padding: '0.6em 3em',
                                    fontSize: location.pathname ==='/home' ? { xs: '8px', md: '0.8em' } : { xs: '13px', md: '1.3em' },
                                    transitionDuration: '0.5s',
                                    transitionProperty: 'background-color',
                                    '&:hover': {
                                        backgroundColor: '#150033',
                                    }
                                }}>{value.title}</Item>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                {location.pathname === '/home' && <hr />}
            </Container>
        </>
    );
}
