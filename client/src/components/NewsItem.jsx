import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiActions, ToggleBtn } from '.';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function ImgMediaCard(props) {//Function to beautify created_date timestamp
    const { keyProp, title, desc, ImgSrc, newsURL, created_at } = props;
    const navigate = useNavigate();
    const location = useLocation();
    
    function beautifyTimestamp(timestamp) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };

        const formattedDate = new Date(timestamp).toLocaleDateString(undefined, options);
        return formattedDate;
    }
    const beautifiedTimestamp = beautifyTimestamp(created_at);



    return (
        <Card sx={{ maxWidth: 400, borderRadius: '5px', height: 'min-content', border: '2px solid grey', backgroundColor: 'primary.main', color: 'whitesmoke' }} key={keyProp}>
            {location.pathname ==='/home' ? (<CardMedia
                component="img"
                alt={title}
                height="200"
                image={ImgSrc !== null ? ImgSrc : 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            />) : (<CardMedia
                component="img"
                alt={title}
                height="200"
                image={ImgSrc !== null ? ImgSrc[0].url : 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            />)}
            <CardContent sx={{ height: 'min-content' }}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Chip color="success" size="small" variant='outlined' label={beautifiedTimestamp} />
                    <ToggleBtn />
                </Box>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '500' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color='whitesmoke'>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { md: 'flex-end' }, alignItems: { xs: 'flex-end' }, height: '20%' }}>
                <Button
                    onClick={() => {
                        // Navigate to the 'long' page with newsURL as a URL parameter
                        navigate(`/long?newsURL=${encodeURIComponent(props.newsURL)}`);
                    }}
                    sx={{
                        backgroundColor: 'primary.dark',
                        color: 'whitesmoke',
                        width: { xs: '100%', md: '50%' },
                        marginBottom: { xs: '10px', md: '0' },
                        '&:hover': {
                            backgroundColor: '#3c3c3c',
                            color: '',
                        },
                    }}>
                    Read
                </Button>
                {/* <Modal summaryURL={newsURL} summaryTitle={title} /> */}
                <AiActions summaryURL={newsURL} summaryTitle={title} />
            </CardActions>
        </Card>
    );
}