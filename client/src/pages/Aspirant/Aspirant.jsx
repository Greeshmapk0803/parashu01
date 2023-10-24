import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const ForAspirants = () => {
    return (
        <Container maxWidth="md" sx={{mb:'3em'}}>
            <Typography variant="h1" gutterBottom sx={{textAlign:'center'}}>
                Parashu for Aspirants
            </Typography>
            <Box sx={{ marginTop: 8, textAlign: 'justify' }}>
                <Typography variant="body1" paragraph>
                    Attention, future leaders! Parashu is your ideal companion on your journey to success. We understand the
                    unique challenges aspirants face, and we're here to support you every step of the way. Here's what
                    Parashu offers exclusively for aspirants:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography variant="h4" gutterBottom>
                        1. Personalized News Feeds
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Tailored news content based on your exam preferences, ensuring you stay updated on relevant topics.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        2. Interactive Learning
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Engage in quizzes and interactive lessons to reinforce your knowledge and boost your exam preparation.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        3. AI-Powered Study Assistants
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Ask questions, clarify doubts, and get instant answers from our AI study assistants, available 24/7.
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    Parashu is more than just a news app; it's your study companion, mentor, and knowledge hub, all rolled
                    into one. Don't just read the news; understand it, learn from it, and excel in your exams with Parashu.
                </Typography>
            </Box>
        </Container>
    );
};

export default ForAspirants;
