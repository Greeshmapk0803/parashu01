import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Box from '@mui/material/Box';
import { DragandDropLoader } from '../components';
import { Typography, TextField } from '@mui/material';

const DragAndDrop = () => {
    const history = useNavigate();
    const [btn, setBtn] = useState(false);
    const [droppedLink, setDroppedLink] = useState('');
    const [inputLink, setInputLink] = useState('');

    useEffect(() => {
        if (droppedLink || inputLink) {
            // Enable the button if a link is dropped or input
            setBtn(true);
        } else {
            setBtn(false);
        }
    }, [droppedLink, inputLink]);

    const handleDrop = (event) => {
        event.preventDefault();
        const link = event.dataTransfer.getData('url');
        setDroppedLink(link);
        console.log(link);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setInputLink(event.target.value);
    };

    const handleButtonClick = () => {
        // Push to the long page route when the button is clicked
        const newsURL = droppedLink || inputLink;
        history('/long?newsURL=' + encodeURIComponent(newsURL));
    };

    return (
        <>
            {!btn && (
                <Box
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    sx={{
                        width: {xs:'100%',sm:'70%'},
                        height: '300px',
                        margin: '2em auto',
                        borderRadius: '10px',
                        border: '2px dashed #ccc',
                        textAlign: 'center',
                        lineHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        minHeight:'60vh',
                    }}
                >
                    <DragandDropLoader />
                    <Typography variant='h5'>Drop or Paste a link here and get curated summary by AI</Typography>
                    <TextField
                        label="Paste Your Link Here"
                        value={inputLink}
                        onChange={handleInputChange}
                        variant="outlined"
                        color="secondary"
                        focused
                        sx={{ marginBottom: '1em', borderRadius:'10px', color: 'white', width:'80%'}}
                    />
                </Box>
            )}
            {btn && (
                <Box
                    sx={{
                        display: 'flex',
                        margin: '2em auto',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: {xs:'100%',sm:'70%'},
                        height: '300px',
                        borderRadius: '10px',
                        border: '2px dashed #ccc',
                        textAlign: 'center',
                    }}
                >
                    <DragandDropLoader />
                    <Button
                        variant="contained"
                        color="success"
                        endIcon={<ChromeReaderModeIcon />}
                        onClick={handleButtonClick}
                    >
                        Click to Get the Summarized News
                    </Button>
                </Box>
            )}
        </>
    );
};

export default DragAndDrop;
