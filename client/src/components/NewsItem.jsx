import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiActions } from '.';
import Link from '@mui/material/Link';

export default function ImgMediaCard(props) {
    const {keyProp , title, desc, ImgSrc, newsURL} = props;
    console.log(ImgSrc);
    return (
        <Card sx={{ maxWidth: 400, borderRadius: '5px',}} height='max-content' key={keyProp}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="40%"
                    image={ImgSrc !== null ? ImgSrc[0].url : 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'}
                />
            <CardContent sx={{height: {md:'40%'}}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', flexDirection:{xs:'row', md:'column'}, justifyContent:{ md:'flex-end'},alignItems:{xs:'flex-end'}, height: 'auto'}}>
                <Link href={newsURL} sx={{width:'100%'}} target="_blank">
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
                </Link>
                <AiActions />
            </CardActions>
        </Card>
    );
}