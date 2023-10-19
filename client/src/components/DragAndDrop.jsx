import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Box from '@mui/material/Box';
import { DragandDropLoader } from '../components';
import { Typography, TextField } from '@mui/material';
import Container from '@mui/material/Container';

const DragAndDrop = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [btn, setBtn] = useState(false);
    const [droppedLink, setDroppedLink] = useState('');
    const [inputLink, setInputLink] = useState('');

    useEffect(() => {//change th edocument title on load
        document.title = `Parashu | Drag and Drop`;//setting the document title dynamically
    }, []);

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
        //provide the link to the search page if he is in get cotext intro page
        if (location.pathname === '/context') {
            navigate('/context/result?newsURL=' + encodeURIComponent(link))
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setInputLink(event.target.value);
        if (location.pathname === '/context') {
            navigate('/context/result?newsURL=' + encodeURIComponent(event.target.value))
        }

    };

    const handleButtonClick = () => {
        // Push to the long page route when the button is clicked
        const newsURL = droppedLink || inputLink;
        navigate('/long?newsURL=' + encodeURIComponent(newsURL));
    };

    return (
        <>
            {location.pathname === '/dnd' &&<Container maxWidth='xl'>
                <Typography sx={{fontSize:{xs:'25px', md:'50px'},fontWeight:'700',textAlign:'center'}}>Drag and Drop</Typography>
                <Typography component='p' sx={{fontSize:{xs:'15px', md:'20px'},textAlign:'center'}}>Revolutionize Your Reading Experience: Drag and Drop Links, Let AI Do the Rest! Introducing our cutting-edge drag and drop feature – effortlessly grab any news link and drop it here. Our intelligent AI will instantly dive into the content, summarizing the news for you. Stay informed without the lengthy reads. It’s as easy as dragging, dropping, and absorbing knowledge in seconds!</Typography>
                </Container>
            }
            {!btn && (
                <Box
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    sx={{
                        width: { xs: '100%', sm: '70%' },
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
                        minHeight: '60vh',
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
                        sx={{input:{color:'white'}, marginBottom: '1em', borderRadius: '10px', color: 'white', width: '80%' }}
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
                        width: { xs: '100%', sm: '70%' },
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
