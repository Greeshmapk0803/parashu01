import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Box from '@mui/material/Box';
import { DragandDropLoader } from '../components';
import { Typography } from '@mui/material';

const DragAndDrop = () => {
    const history = useNavigate();
    const [btn, setBtn] = useState(false);
    const [droppedLink, setDroppedLink] = useState('');

    useEffect(() => {
        if (droppedLink) {
            // Fetch data corresponding to the dropped link
            setBtn(true);
        }
    }, [droppedLink]);

    const handleDrop = (event) => {
        event.preventDefault();
        const link = event.dataTransfer.getData('url');
        setDroppedLink(link);
        console.log(link);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = () => {
        // Push to the long page route when the button is clicked
        history('/long?newsURL=' + encodeURIComponent(droppedLink));
    };

    return (
        <>
            {!btn && <Box
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                sx={{
                    width: '70%',
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
                }}
            >
                <DragandDropLoader />
                <Typography variant='h5'>Drop a link here and get curated summary by AI</Typography>
            </Box>}
            {btn && (
                <Box sx={{
                    display: 'flex',
                    margin: '2em auto',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '50%',
                    height: '300px',
                    borderRadius: '10px',
                    border: '2px dashed #ccc',
                    textAlign: 'center',
                }}>
                    <DragandDropLoader />
                    <Button variant="contained" color="success" endIcon={<ChromeReaderModeIcon />} onClick={handleButtonClick}>
                        Click to Get the Summarized News
                    </Button>
                </Box>
            )}
        </>
    );
};

export default DragAndDrop;
