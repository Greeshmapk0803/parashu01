import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {newsPages} from '../constants';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1, margin:'' }}>
            <Grid container spacing={3} sx={{margin:{xs:'0',md:' 0 3em'}}}>
                {newsPages.map((value, index) => (
                    <Grid xs="auto" key={index} sx={{margin:''}}>
                        <Link to={value.path} style={{textDecoration:'none', }}>
                            <Item sx={{
                                backgroundColor:'#35293f', 
                                color:'whitesmoke', 
                                textTransform:'capitalize',
                                borderRadius:'12px',
                                padding:'0.6em 3em',
                                fontSize:{xs:'13px', md:'1.3em'},
                                transitionDuration:'0.5s', 
                                transitionProperty:'background-color',
                                '&:hover':{
                                    backgroundColor:'#150033',
                                }
                            }}>{value.title}</Item>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
