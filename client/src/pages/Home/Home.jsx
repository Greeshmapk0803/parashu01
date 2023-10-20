import { Container } from '@mui/material'
import React, {useEffect} from 'react'
import {InfiniteNews, TopicGrid} from '../../components';

const Home = () => {

    useEffect(() => {//change th edocument title on load
        document.title = `Parashu | Home`;//setting the document title dynamically
    }, []);

    return (
        <Container>
            <TopicGrid/>
            <InfiniteNews/>

        </Container>
    )
}

export default Home