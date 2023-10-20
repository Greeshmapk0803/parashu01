import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { InfiniteNewsCard, Spinner, Toast } from '.';
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from '@mui/material';


const InfiniteNews = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [toastify, setToastify] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?country=in&language=en&apikey=pub_314243eec9787eb043aa6be9ff8321a57d225');
                setData(response.data.results);
                console.log('RESPONSE DATA',response.data);
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
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    const fetchMoreData = async () => {
        let url = `https://newsdata.io/api/1/news?country=in&language=en&apikey=pub_314243eec9787eb043aa6be9ff8321a57d225&page=${page}`;
        setLoading(true);
        const newresponse = await axios.get(url)
        setPage(newresponse.data.nextPage);
        console.log('newResonse', newresponse);

        setData(data.concat(newresponse.data.results));
        setLoading(false);
        setTotalResults(newresponse.data.totalResults)
    };


    return (
        <Box sx={{}}>
            {loading && <Spinner/>}
            {/* {error && <p>Error occurred: {error.message}</p>} */}
            <Toast show={toastify} err={error} pullData={loading} />
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length !== totalResults}
                loader={loading && <Spinner/>}
            >
                {data.map(item => (
                    <InfiniteNewsCard {...item} />
                ))}
            </InfiniteScroll>
        </Box>
    );
};

export default InfiniteNews;
