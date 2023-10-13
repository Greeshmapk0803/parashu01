import React, { useEffect, useState, Suspense } from 'react'
import axios from 'axios';
import NewsItem from '../../components/NewsItem';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Spinner} from '../../components';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function News(props) {
    const {path} = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = process.env.NYT_NEWS_API_KEY;
    console.log(process.env.NYT_NEWS_API_KEY);
    const apiEndPoint = `https://api.nytimes.com/svc/topstories/v2/${path}.json?api-key=df2wNBhQH6XoZBZJnmj151DiOeDHKSaL`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndPoint);
                setData(response.data.results);
                console.log(response.data.results)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiEndPoint]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
            <Box sx={{ flexGrow: 1, margin: {xs:'2em 1em',md:'0 1em 2em 1em'}, backgroundColor:'primary.dark'}}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((item, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <NewsItem keyProp={item.uri} title={item.title} desc ={item.abstract} ImgSrc ={item.multimedia} newsURL ={item.url} source={item.created_date} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
    );
}

export default News;






    // export default News