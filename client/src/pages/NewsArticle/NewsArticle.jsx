import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link,useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { InsertInvitationRoundedIcon, ChromeReaderModeIcon, SmartToyIcon } from '../../assets/icons';
import NewsArticleLoader from '../../components/Loaders/NewsArticleLoader';
import { Toast, Error, LoadingQuotes } from '../../components';
import { facts } from '../../constants';

const NewsArticle = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //both needed for toast
    const [toastify, setToastify] = useState(false)
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_TLDR_API_KEY
    const apiUrl = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';

    const fetchData = async (url) => {
        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
            },
            data: {
                url: url,
                min_length: 100,
                max_length: 300,
                is_detailed: false
            }
        };
        try {
            const response = await axios.request(options);
            setSummary(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error)
            setToastify(true);//setting toast
        }
    };

    const handleBotClick = () => {
        navigate('/chat?content=' + summary.article_text + 'Take this and analyze this and ask me to get ready for this quiz. Start the quiz once I say yes');
    }

    useEffect(() => {
        const summarizeURL = new URLSearchParams(location.search);
        const newsURL = summarizeURL.get('newsURL');
        fetchData(newsURL);
    }, []); // Empty dependency array ensures useEffect runs once when the component is mounted

    useEffect(() => {
        document.title = `Parashu | ${summary ? `${summary.article_title}` : "Summarizing your Article"}`;//
    }, []);


    return (
        <div>
            {isLoading ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <Typography component='p' sx={{ margin: '1em', textAlign: 'center' }}>AI is generating a summary curated just for you</Typography>
                    <NewsArticleLoader />
                    <LoadingQuotes data={facts} />
                </Box>
            ) : (
                <>
                    {error && <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <h1>Couldn't process this article</h1>
                        <Error />
                    </Box>}
                    {!error && <Box sx={{
                        maxWidth: { xs: '95%', md: '70%' },
                        margin: '0em auto 2em auto',
                    }}>
                        <Typography sx={{ fontSize: { xs: '25px', md: '35px' } }}>{summary.article_title}</Typography>
                        <Box sx={{ display: 'flex', margin: '1em 0 1em 0' }}>
                            <InsertInvitationRoundedIcon />
                            <Typography sx={{ margin: '0 5px' }}>{summary.article_pub_date}</Typography>
                        </Box>
                        <Box sx={{ width: { xs: '95%', md: '80%' }, margin: 'auto' }}><img style={{ width: '100%', borderRadius: '10px' }} src={summary.article_image} alt="pokkade" /></Box>
                        <Typography component="p" sx={{ margin: '2em 1em' }}>{summary.article_text}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Box sx={{mr:'10px'}}>
                                <Button variant="contained" color="warning" endIcon={<SmartToyIcon />} onClick={handleBotClick}>
                                    Ask Bot
                                </Button>
                            </Box>
                            <Link to={summary.article_url} target='_blank'>
                                <Button variant="contained" color="success" endIcon={<ChromeReaderModeIcon />}>
                                    Read Full Article
                                </Button>
                            </Link>
                        </Box>
                    </Box>}
                    <Toast show={toastify} err={error} pullData={isLoading} />
                </>
            )}
        </div>
    );
};

export default NewsArticle;
