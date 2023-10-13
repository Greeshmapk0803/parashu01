import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiActions } from '.';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

export default function ImgMediaCard(props) {
    const {keyProp , title, desc, ImgSrc, newsURL, source} = props;
    
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
    
    const timestamp = '2023-10-11T12:37:14-04:00';
    const beautifiedTimestamp = beautifyTimestamp(timestamp);
    console.log(beautifiedTimestamp);
    
    

    return (
        <Card sx={{ maxWidth: 400, borderRadius: '5px', height:'min-content', border:'2px solid grey'}}  key={keyProp}>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="200"
                        image={ImgSrc !== null ? ImgSrc[0].url :'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'}
                    />
                                <CardContent sx={{height: 'min-content'}}>
                                <Chip color="warning" size="small" label={beautifiedTimestamp} />
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                                </CardContent>
                                <CardActions sx={{display:'flex',flexDirection:{xs:'column', md: 'row'}, justifyContent:{ md:'flex-end'},alignItems:{xs:'flex-end'}, height: '20%'}}>
                    <Link href={newsURL} sx={{width:'100%'}} target="_blank">
                        <Button sx={{
                            backgroundColor:'primary.main',
                            color:'white',
                            width:'100%',
                            marginBottom:{xs:'10px', md:'0'},
                            '&:hover': {
                                backgroundColor: '#262626',
                                color: '#f5f5f5',
                                opacity: [0.9],
                            },
                            }}>
                            Read
                            </Button>
                    </Link>
                    <AiActions />
                                </CardActions>
        </Card>
    );
}