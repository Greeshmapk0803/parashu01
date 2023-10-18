import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import landingImage from '../../assets/images/landing.jpg';
import vision from '../../assets/images/vision.jpg';
import { MemoryIcon, NotStartedIcon, SummarizeIcon, QuestionMarkIcon, TipsAndUpdatesIcon } from '../../assets/icons';
import { DragAndDrop, TopicGrid } from '../../components';
import { features } from '../../constants';

const Landing = () => {

    useEffect(() => {//change th edocument title on load
        document.title = `Parashu | A Modern NEWS App`;//setting the document title dynamically
    }, []);

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', margin: '0 2em 2em 2em' }}>
                <Grid sx={{ margin: { md: '3em auto' },  width: { xs: '100%', sm: '65%' } }}>
                    <Typography variant="h2" sx={{display:{xs:'none', sm:'flex'}, width: { xs: '100%', sm: '95%' }, margin: { xs: '0 0 0 0', sm: '0em 1em 0.5em 0em' }, fontSize: { xs: '25px', md: '50px' } }}>Parashu<br sx={{display:{xs:'none', md:'block'}}}/>Where the Future of News Unfolds, Every Story a Beacon of Tomorrow's World</Typography>
                    <Typography variant="h2" sx={{display:{xs:'flex', sm:'none'}, width: { xs: '100%', sm: '95%' }, margin: { xs: '0 0 0 0', sm: '0em 1em 0.5em 0em' }, fontSize: { xs: '25px', md: '50px' } }}>Parashu: Shaping the Future of News.</Typography>
                    <Typography variant="5" sx={{textAlign:{xs:'center', md:'left'}}}>Where News Gets a Digital Soul. Feel the Beat of Truth in Every Byte. Informed Today, Ahead Tomorrow!</Typography>
                    <Box sx={{margin: { xs: '1em auto', md: '3em auto 2em auto' }, display: 'flex', flexDirection:{xs:'column', md:'row'},justifyContent: {xs:'space-around',md:'flex-start'} }}>
                        <Link to='/home' style={{}}>
                            <Button variant="outlined" sx={{ color: 'white',width:'100%' }} color="secondary" endIcon={<MemoryIcon />} size="large">
                                Explore AI Actions
                            </Button>
                        </Link>
                        <Link to='/home'>
                            <Button variant="contained" sx={{ margin:{xs:'1em 0 0 0', md:'0 0 0 3em'},width:'100%' }} endIcon={<NotStartedIcon />} size="large">
                                Get Started
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Box sx={{ width: { xs: '98%', sm: '35%' }, marginTop: { xs: '20px', md: '0' } }}>
                    <img src={landingImage} alt="landing page" style={{ width: '100%', height: { xs: '25vh', md: '65vh' }, objectFit: 'cover', borderRadius: '10px' }} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: 'primary.main', width: '100%',  borderRadius:'10px' }}>
                <Typography sx={{ margin: '2em 0 1em 0', textAlign: 'center', p: '10px', fontSize: { xs: '30px', md: '40px' } }}>Elevate Your News Experience with Parashu: The Power of AI Unleashed!</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: '0em 0 3em 0' }}>
                    {features.map((value, index) => (
                        <Box key={index} sx={{ backgroundColor: '#000418', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: { xs: '90%', sm: '300px' }, margin: '0 0 1em 0' }}>
                            <img src={value.img} alt="icon" style={{ width: '100%', height: '200px', borderRadius: '10px 10px 0 0', objectFit: 'cover' }} />
                            <Typography variant='h6' sx={{ p: '0 10px 5px 10px' }}>{value.title}</Typography>
                            <Typography component='p' sx={{ p: '0 10px 5px 10px', fontSize: '12px' }}>{value.tagline}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ background: `linear-gradient(rgba(0,0,0,0.597), rgba(0,0,0,0.597)) ,url(${vision})`, padding: { xs: '1em', md: '4em' },  borderRadius:'0 0 10px 10px' }}>
                    <Typography component="p" sx={{ textAlign: 'center', fontSize: '50px' }}>Our Vison</Typography>
                    <Typography component='p' sx={{ margin: { xs: '2em 0em', md: '2em 2em', fontSize: '20px' } }}>At Parashu, we embrace a grand vision: to reshape the global information landscape fundamentally. We're not just redefining news; we're reimagining how societies perceive and interact with the world's complexities. Our driving force is the belief that knowledge, when harnessed intelligently, becomes a transformative force. We envision a future where every individual, regardless of their background, can access information that's not just comprehensive but deeply insightful. We see a world where news isn't just a series of events but a web of interconnected stories, fostering empathy and understanding across cultures. Through the lens of advanced AI, we're committed to unraveling the intricate threads of global events, translating them into narratives that resonate with the human experience. We're on a mission to create a platform where intellectual curiosity thrives, where discussions are rich, diverse, and nuanced, and where every piece of information contributes to a broader tapestry of understanding. Our vision extends beyond providing news; it encompasses nurturing a global community where knowledge doesn't just empower; it inspires, connects, and unites. Join us in this endeavor, where every insight shared, every perspective valued, propels us closer to a world where enlightenment is not a luxury but a universal right</Typography>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: 'primary.dark', padding: { xs: '10px', md: '2em' } }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontSize: { xs: '35px', md: '40px' } }}>Try droping some NEWS!</Typography>
                <DragAndDrop />
            </Box>

            <Box sx={{backgroundColor:'primary.main', borderRadius:'10px', margin:'0 0 3em 0'}}>
                <Typography variant="h3" sx={{textAlign:'center', fontSize: { xs: '30px', md: '50px' }}}>Jump to Your Interest</Typography>
                <TopicGrid />
            </Box>

                
        </Container>
    )
}

export default Landing;
