import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiActions } from '.';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.unsplash.com/photo-1696506473657-b3edcadfe08c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', flexDirection:'column'}}>
                <Button sx={{
                    backgroundColor:'primary.main', 
                    color:'white', 
                    width:'100%',
                    '&:hover': {
                        backgroundColor: '#262626',
                        color: '#f5f5f5',
                        opacity: [0.9],
                    },
                    }}>
                    Read
                    </Button>
                <AiActions />
            </CardActions>
        </Card>
    );
}