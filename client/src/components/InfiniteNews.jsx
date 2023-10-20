import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsItem from '../components/NewsItem';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Error, Spinner, Toast } from '../components';
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteNews = (props) => {
    // console.log(location.pathname);

    const { path } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState('');
    const [totalResults, setTotalResults] = useState(0);

    //both needed for toast
    const [toastify, setToastify] = useState(false)

    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }

    // function removeLeadingSlash(inputString) {
    //     if (inputString.startsWith('/')) {
    //         return inputString.substring(1);
    //     }
    //     return inputString;
    // }
    // Example usage:
    // const stringWithoutSlash = removeLeadingSlash(path);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?country=in&language=en&apikey=pub_31531e6e4ddf7f454a8f2d1d6cbe6e5bc9ea8');
                setData(response.data.results);
                console.log('RESPONSE DATA', response.data);
                setTotalResults(response.totalResults)
                setPage(response.data.nextPage)
                setLoading(false);
            } catch (error) {
                setError(error);
                setToastify(true);
                setLoading(false);
            } 
        };

        fetchData();

        document.title = `Parashu | Home`;//setting the document title dynamically

    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsdata.io/api/1/news?country=in&language=en&apikey=pub_31531e6e4ddf7f454a8f2d1d6cbe6e5bc9ea8&page=${page}`;
        setLoading(true);
        const newresponse = await axios.get(url)
        setPage(newresponse.data.nextPage);
        console.log('newResonse', newresponse);

        setData(data.concat(newresponse.data.results));
        setLoading(false);
        setTotalResults(newresponse.data.totalResults)
        console.log('PAGE', page);
        console.log('DATA', data);
        console.log('NEXTPAGE', data.nextPage);
    };

    if (error) {
        return (
            <Box maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                Error occurred: {error.message}
                <Error />
                <Toast show={toastify} err={error} pullData={loading} />
            </Box>)
    }


    return (
        <Box>
            {loading && <Spinner />}
            <Toast show={toastify} err={error} pullData={loading} />
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length !== totalResults}
                loader={loading && <Spinner />}
            >
                <Box sx={{ flexGrow: 1, margin: { xs: '0em 1em', md: '0 1em 2em 1em' }, backgroundColor: 'primary.dark', minHeight: '100vh' }}>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {data.map((item, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <NewsItem keyProp={item.article_id} title={item.title} ImgSrc={item.image_url
                                } newsURL={item.link} created_at={item.pubDate} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </InfiniteScroll >
        </Box>
    );
}

export default InfiniteNews;