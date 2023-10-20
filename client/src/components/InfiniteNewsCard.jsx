import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToggleBtn, AiActions } from '.';
import { useNavigate } from 'react-router-dom';
import { CardMedia } from '@mui/material';

export default function BasicCard(props) {
    const { title, description, source_id, pubDate, link, image_url } = props;

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
    const beautifiedTimestamp = beautifyTimestamp(pubDate);

    const handleButtonClick = () => {
        // Push to the long page route when the button is clicked
        navigate('/long?newsURL=' + encodeURIComponent(link));
    };

    return (
        <Card variant='outlined' sx={{ minWidth: 275, backgroundColor:'primary.main' , color:'whitesmoke', border:'1px solid gray', display:'flex', flexDirection:{xs:'column', md:'row'} }}>
            <Box>
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
                    {/* <Typography variant="body1">
                        {description}
                    </Typography> */}
                </CardContent>
                <CardActions sx={{display:'flex',flexDirection:{xs:'column', md:'row'}, justifyContent:'flex-start', px:'2em', alignItems:'center'}}>
                    <Box sx={{width:{xs:'100%',md:'fit-content'},marginBottom:{xs:'10px', md:'0'}, display:'flex', alignItems:'flex-start'}}>
                        <AiActions summaryTitle={title}/>
                    </Box>
                    <Box sx={{display:'flex', width:'100%'}}>
                        <Button
                                variant="contained"
                                color="success"
                                onClick={handleButtonClick}
                                sx={{width:{xs:'100%', md:'fit-content'}, margin:'0 3px 0 0'}}
                            >
                                Get Summary
                        </Button>
                        <ToggleBtn />
                    </Box>
                </CardActions>
            </Box>
        </Card>
    );
}
