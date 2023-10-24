import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const AboutUs = () => {
    return (
        <Container maxWidth="md" sx={{ mb: '2em' }}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: 'center' }}>
                About Parashu
            </Typography>
            <Box sx={{ marginTop: 8, textAlign: 'justify' }}>
                <Typography variant="body1" paragraph>
                    Our mission is to empower you with the most relevant news stories, summarized intelligently for your
                    convenience. Whether you're a busy professional, a student, or a news enthusiast, Parashu is designed
                    with you in mind. Say goodbye to information overload and hello to curated, insightful news bites.
                </Typography>
                <Typography variant="body1" paragraph>
                    What sets us apart is our commitment to not just reporting news but understanding it. Our AI algorithms
                    provide context, debunk misinformation, and offer interactive learning experiences. From personalized
                    quizzes to visually engaging summaries, Parashu ensures that staying informed is an enriching experience.
                </Typography>
                <Typography variant="body1" paragraph>
                    Join us on this exciting journey where technology and journalism converge. Explore the future of news
                    with Parashu – your gateway to a smarter, more informed world.
                </Typography>
                <Button variant="contained" color="secondary" size="large" href="https://medium.com/@newsparashu/parashu-a-journey-through-ai-powered-news-evolution-b8df7cc267ff" target='_blank'>
                    Read Our Story on Medium
                </Button>
            </Box>
        </Container>
    );
};

export default AboutUs;
