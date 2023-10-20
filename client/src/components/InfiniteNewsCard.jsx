import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToggleBtn, AiActions } from '.';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function BasicCard(props) {
    const { title, description, source_id, pubDate, link } = props;

    const naviagte = useNavigate();

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
    const beautifiedTimestamp = beautifyTimestamp(pubDate);

    const handleButtonClick = () => {
        // Push to the long page route when the button is clicked
        naviagte('/long?newsURL=' + encodeURIComponent(link));
    };

    return (
        <Card variant='outlined' sx={{ minWidth: 275, backgroundColor:'primary.main' , color:'whitesmoke', border:'1px solid gray' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, textTransform:'capitalize' }} color="gray" gutterBottom>
                    {source_id}
                </Typography>
                <Typography variant="h5" component="div" sx={{}}>
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5, textTransform:'capitalize' }} color="gray">
                    {beautifiedTimestamp}
                </Typography>
                <Typography variant="body1">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'flex-start', px:'2em', alignItems:'center'}}>
                <Box sx={{width:'fit-content'}}>
                    <AiActions />
                </Box>
                <Link to='/'><Button size="large" color='success' sx={{margin:'0 2em 0 2em'}}>Read</Button></Link>
                <Button
                        variant="contained"
                        color="success"
                        onClick={handleButtonClick}
                    >
                        Click to Get the Summarized News
                    </Button>
                <ToggleBtn />
            </CardActions>
        </Card>
    );
}