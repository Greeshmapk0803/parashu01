import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiActions } from '.';
// import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Modal from './Modal';


export default function ImgMediaCard(props) {//Function to beautify created_date timestamp
    const { keyProp, title, desc, ImgSrc, newsURL, created_at } = props;
    const navigate = useNavigate();
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
            <CardMedia
                component="img"
                alt={title}
                height="200"
                image={ImgSrc !== null ? ImgSrc[0].url : 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'}
            />
            <CardContent sx={{ height: 'min-content' }}>
                <Chip color="success" size="small" variant='outlined' label={beautifiedTimestamp} />
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
                        width: '30%',
                        marginBottom: { xs: '10px', md: '0' },
                        '&:hover': {
                            backgroundColor: '#3c3c3c',
                            color: '',
                        },
                    }}>
                    Read
                </Button>
                <Modal summaryURL={newsURL} summaryTitle={title} />
            </CardActions>
        </Card>
    );
}