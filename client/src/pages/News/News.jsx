import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsItem from '../../components/NewsItem';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Spinner } from '../../components';
import { useLocation } from 'react-router-dom';

export function News(props) {
    const location = useLocation();
    console.log(location.pathname);

    const { path } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    function removeLeadingSlash(inputString) {
        if (inputString.startsWith('/')) {
            return inputString.substring(1);
        }
        return inputString;
    }
    // Example usage:
    const stringWithoutSlash = removeLeadingSlash(path);

    const apiEndPoint = `https://api.nytimes.com/svc/topstories/v2/${path}.json?api-key=df2wNBhQH6XoZBZJnmj151DiOeDHKSaL`
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndPoint);
                setData(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        document.title = `Parashu | ${capitalize(stringWithoutSlash)}`;//setting the document title dynamically

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
        <Box sx={{ flexGrow: 1, margin: { xs: '0em 1em', md: '0 1em 2em 1em' }, backgroundColor: 'primary.dark', minHeight: '100vh' }}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((item, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <NewsItem keyProp={item.uri} title={item.title} desc={item.abstract} ImgSrc={item.multimedia} newsURL={item.url} created_at={item.created_date} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default News;