import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import landingImage from '../../assets/images/landing.jpg';
import vision from '../../assets/images/vison.jpg';
import { MemoryIcon, NotStartedIcon, SummarizeIcon, QuestionMarkIcon, TipsAndUpdatesIcon } from '../../assets/icons';
import { DragAndDrop } from '../../components';

const features = [
    {
        "title": "Summarization",
        "tagline": "Digestible Insights, Amplified Knowledge",
        "icon": <SummarizeIcon sx={{ fontSize: '70px', mb: '10px' }} />
    },
    {
        "title": "Contextualization",
        "tagline": "Discover the Depth Within the News",
        "icon": <TipsAndUpdatesIcon sx={{ fontSize: '70px', mb: '10px' }} />
    },
    {
        "title": "Quizzing",
        "tagline": "Challenge Your Intellect, Expand Your Horizons",
        "icon": <QuestionMarkIcon sx={{ fontSize: '70px', mb: '10px' }} />
    }
];


const Landing = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3em 3m 0 3em' }}>
                <Box sx={{ display: 'flex',flexDirection:{xs:'column', md:'row'}, alignItems:'center', margin: '0 2em 2em 2em' }}>
                    <Grid sx={{margin:{md:'3em auto'}}}>
                        <Typography variant="h2" sx={{ width: '70%', margin: '0em 1em 0.5em 0em', fontSize:{xs:'35px', md:'50px'} }}>Enter the Future of News: Parashu</Typography>
                        <Typography variant="5" sx={{}}>Where News Gets a Digital Soul. Feel the Beat of Truth in Every Byte. Informed Today, Ahead Tomorrow!</Typography>
                        <Box sx={{ margin: '3em auto 2em auto', display: 'flex', justifyContent: 'flex-start' }}>
                            <Button variant="outlined" sx={{ color: 'white', mx: '2em 2em 2em 0' }} color="secondary" endIcon={<MemoryIcon />} size="large">
                                Explore the AI features
                            </Button>
                            <Link to='/home'>
                                <Button variant="contained" sx={{ mx: '2em' }} endIcon={<NotStartedIcon />} size="large">
                                    Get Started
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Box sx={{ width: '60%' }}>
                        <img src={landingImage} alt="landing page" style={{ width: '100%', height: '65vh', objectFit: 'cover', borderRadius: '10px' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'primary.main', width: '100%' }}>
                <Typography sx={{ margin: '2em 0 1em 0', textAlign: 'center', p: '10px', fontSize:{xs:'25px', md:'40px'} }}>Elevate Your News Experience with Parashu: The Power of AI Unleashed!</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: '0em 0 3em 0' }}>
                    {features.map((value, index) => (
                        <Box key={index} sx={{ backgroundColor: '#000418', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', p: '1em', maxWidth: '200px', margin: '0 0 1em 0' }}>
                            <Typography variant='h6' sx={{ textAlign: 'center' }}>{value.title}</Typography>
                            {value.icon}
                            <Typography component='p' sx={{ textAlign: 'center' }}>{value.tagline}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{background:`linear-gradient(rgba(0,0,0,0.597), rgba(0,0,0,0.597)) ,url(${vision})`, padding:{xs:'1em',md:'4em'}}}>
                    <Typography component="p" sx={{textAlign:'center', fontSize:'50px'}}>Our Vison</Typography>
                    <Typography component='p' sx={{margin:{xs:'2em 0em', md:'2em 2em', fontSize:'20px'}}}>At Parashu, we embrace a grand vision: to reshape the global information landscape fundamentally. We're not just redefining news; we're reimagining how societies perceive and interact with the world's complexities. Our driving force is the belief that knowledge, when harnessed intelligently, becomes a transformative force. We envision a future where every individual, regardless of their background, can access information that's not just comprehensive but deeply insightful. We see a world where news isn't just a series of events but a web of interconnected stories, fostering empathy and understanding across cultures. Through the lens of advanced AI, we're committed to unraveling the intricate threads of global events, translating them into narratives that resonate with the human experience. We're on a mission to create a platform where intellectual curiosity thrives, where discussions are rich, diverse, and nuanced, and where every piece of information contributes to a broader tapestry of understanding. Our vision extends beyond providing news; it encompasses nurturing a global community where knowledge doesn't just empower; it inspires, connects, and unites. Join us in this endeavor, where every insight shared, every perspective valued, propels us closer to a world where enlightenment is not a luxury but a universal right</Typography>
                </Box>

                <Box sx={{backgroundColor:'primary.dark', padding:{xs:'10px', md:'2em'}}}>
                    <Typography variant="h3" sx={{textAlign:'center', fontSize:{xs:'35px', md:'40px'}}}>Try droping some NEWS!</Typography>
                    <DragAndDrop />
                </Box>
            </Box>
        </>
    )
}

export default Landing;
