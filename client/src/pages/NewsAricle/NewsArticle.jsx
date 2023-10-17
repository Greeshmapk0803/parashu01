import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { InsertInvitationRoundedIcon, ChromeReaderModeIcon } from '../../assets/icons';
import NewsArticleLoader from '../../components/Loaders/NewsArticleLoader';

const NewsArticle = () => {
    const location = useLocation();
    const summarizeURL = new URLSearchParams(location.search);
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';

    const fetchData = async (url) => {
        const options = {
            method: 'POST',
            url: apiUrl,
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '42c09b95c1msh3fbbc615ba4bbeep199e65jsnc17e96129064',
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
            console.log(response.data)
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const newsURL = summarizeURL.get('newsURL');
        fetchData(newsURL);
    }, []); // Empty dependency array ensures useEffect runs once when the component is mounted


    return (
        <div>
            {isLoading ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <Typography component='p' sx={{ margin: '1em', textAlign: 'center' }}>AI is generating a summary curated just for you</Typography>
                    <NewsArticleLoader />
                    <Typography variant='h5' sx={{ margin: '1em', textAlign: 'center' }}> Did you know that over 500 million new articles are published online every day?</Typography>
                </Box>
            ) : (
                <Box sx={{
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
                        <Link to={summary.article_url} target='_blank'>
                            <Button variant="contained" color="success" endIcon={<ChromeReaderModeIcon />}>
                                Read Full Article
                            </Button>
                        </Link>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default NewsArticle;