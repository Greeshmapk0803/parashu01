import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DragAndDrop } from '../../components';

const Newscontext = () => {
    const [headline, setHeadline] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setHeadline(event.target.value);
    };

    const handleSubmit = () => {
        // Redirect to '/context/results' with the headline as a query parameter
        navigate(`/context/result?newsURL=${encodeURIComponent(headline)}`);
    };

    return (
        <Container maxWidth='xl'>
            <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, fontWeight: '700', textAlign: 'center' }}>News Context</Typography>
            <Typography component='p' sx={{ fontSize: { xs: '12px', md: '20px' }, textAlign: 'center' }}>Ever wondered about the backstory of a news event? We've got you covered! Our app lets you dig into the history behind today's headlines. Just ask about a news event, and we'll provide you with a quick summary of its background, helping you understand the context effortlessly. Stay informed, stay curious!</Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-around', alignItems: 'center' }}>
                <TextField
                    label="Enter News Headline"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                    value={headline}
                    color="secondary"
                    focused
                    textColor='white'
                    sx={{ input: { color: 'white' } }}
                />
                <Button variant="contained" onClick={handleSubmit} sx={{ margin: '0em 2em', alignItems: 'center' }}>
                    Get Context
                </Button>
            </Box>
            <hr />
            <DragAndDrop />
        </Container>
    );
};

export default Newscontext;
