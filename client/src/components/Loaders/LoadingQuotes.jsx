import React, { useState, useEffect } from 'react';
import { Chip, Typography } from '@mui/material';
import { facts } from '../../constants';

const LoadingQuotes = () => {
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        // Get a random quote from the facts array
        const randomIndex = Math.floor(Math.random() * facts.length);
        setRandomQuote(facts[randomIndex].fact);
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <>
            <Chip label="Did You Know" color='primary' />
            <Typography variant='h5' sx={{ margin: '1em', textAlign: 'center' }}>
                {randomQuote}
            </Typography>
        </>
    );
};

export default LoadingQuotes;
