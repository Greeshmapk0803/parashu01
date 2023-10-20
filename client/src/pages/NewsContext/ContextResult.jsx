import React, { useState, useEffect } from 'react'
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { DragAndDrop, InfiniteLoader, LoadingQuotes, Toast } from '../../components';
import { List, ListItem } from '@mui/material';
import {Link} from 'react-router-dom';

const ContextResult = () => {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //both needed for toast
    const [toastify, setToastify] = useState(false)
    const [error, setError] = useState(null);
    
    const fetchData = async (q) => {
        const apiKey = process.env.REACT_APP_GOOGLE_SEARCH_API_KEY; // Replace with your actual Google API key
        const query = `${q} related news`;
        const endpoint = `https://www.googleapis.com/customsearch/v1?cx=f5cb999d93ea448e3&alt=json&key=${apiKey}&q=${query}`;
        
        try {
            if (q) {
                const response = await fetch(endpoint);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.items);
                    // console.log('DATA', data.items)
                    setLoading(false)
                } else {
                    // console.error('Failed to fetch data');
                    setLoading(false);
            }}
        } catch (error) {
            // console.error('Error fetching data:', error);
            setError(error)
            setToastify(true);//setting toast
        }
    };
    
    useEffect(() => {
        const contextURL = new URLSearchParams(location.search);
        fetchData();
        const reqContext = contextURL.get('newsURL')
        fetchData(reqContext);

    })


    return (
        <Container maxWidth="xl">
            <Typography sx={{ fontSize: { xs: '25px', md: '50px' }, fontWeight: '700', textAlign: 'center' }}>News Context</Typography>
            <Typography component='p' sx={{ fontSize: { xs: '15px', md: '20px' }, textAlign: 'center' }}>Ever wondered about the backstory of a news event? We've got you covered! Our app lets you dig into the history behind today's headlines. Just ask about a news event, and we'll provide you with a quick summary of its background, helping you understand the context effortlessly. Stay informed, stay curious!</Typography>
            <hr />

            {loading &&
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                        <InfiniteLoader/>
                        <LoadingQuotes />
                </Box>}
            {!loading && <Box sx={{ display: 'flex', flexDirection:{xs:'column', lg:'row'} }}>
                <List sx={{ width: {xs:'95%',lg:'50%'}, margin:{xs:'auto', lg:'0 2em'}, justifyContent:'center' }}>
                    <Typography sx={{fontSize:{xs:'20px', md:'40px'}, textAlign:'center'}}>Related Events</Typography>
                    {searchResults.map((result, index) => (
                        <ListItem key={index} sx={{border:'2px solid gray', margin:'5px 0', borderRadius:'10px',}}>
                            <Link to={result.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                <Typography variant="body1" sx={{ color:'whitesmoke',fontSize:{xs:'12px',lg:'20px'}, '&:hover': {
                                    color:'#ae79e0'
                                }}}>
                                    {result.title}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <DragAndDrop />
            </Box>}
            <Toast show={toastify} err={error} pullData={loading} />
        </Container>
    )
}

export default ContextResult