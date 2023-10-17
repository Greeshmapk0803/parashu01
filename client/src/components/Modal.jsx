import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Skeleton from './Loaders/Skeleton';


const apiUrl = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';//the ai link

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90vw', md: '60vw' },
    bgcolor: 'primary.main',
    color: 'whitesmoke',
    border: '3px solid #fff',
    borderRadius: '10px',
    boxShadow: 24,
    p: { xs: 2, md: 4 },
};

export default function BasicModal(props) {
    const { summaryURL, summaryTitle } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [toFetch, setToFetch] = useState(true);

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

    // Empty dependency array ensures useEffect runs once when the component is mounted
    const handleFetchClick = () => {
        const newsURL = summaryURL;
        console.log("newsURL", newsURL)
        setToFetch(false);
        fetchData(newsURL);
        setIsLoading(true);
    }

    // const summary = {
    //     "summary": [
    //         "Owen Panettieri’s play “The Lights Are On’ offers a dispiriting preview of what many of our homes may look like in the future. The play takes place in the living quarters of Liz (Danielle Ferland), a doomsday prepper who spends her days pacing about her storm-boarded house."
    //     ],
    //     "article_text": "Owen Panettieri’s play “The Lights Are On” offers a dispiriting preview of what many of our homes may look like in the future.\n\nThe muddled play, a co-production of New Light Theater Project and Embeleco Unlimited, takes place in the living quarters of Liz (Danielle Ferland), a doomsday prepper who spends her days pacing about her storm-boarded house, examining sundry supplies and sorting jars of canned food. Five years earlier, Hurricane Prudence ravaged her home. “Afterwards, there wasn’t a lot worth saving. It all had to go,” she matter-of-factly tells her neighbor Trish (Jenny Bacon).\n\nThe play begins when a discombobulated Trish visits Liz because she thinks someone may have broken into her home. The two haven’t spoken in seven years, yet nothing in Sarah Norris’s direction conveys a sense of estrangement. Instead, simply hearing Liz’s voice seems to lower Trish’s blood pressure by several degrees, and soon they are chatting as easily as if Trish had stopped by for a coffee chat after Sunday services.\n\nInitially, the pair present a study in contrasts: Trish, with her silk top and expensive haircut, comes from inherited wealth, whereas Liz, with her loosefitting flannel shirt and mom jeans, is working class. Yet as they catch up and catastrophize about the world, certain selfish similarities between the two women emerge. Trish has always been too preoccupied with her own life to consider the needs of her neighbor; during Hurricane Prudence, she refused to admit Liz and her son, Nathan (Marquis Rodriguez), into the safety of her home. For her part, Liz has turned her house “into a prison” for herself and her son, Trish notes.",
    //     "article_title": "‘The Lights Are On’ Review: Catastrophizing About the Future",
    //     "article_authors": [
    //         "Rhoda Feng"
    //     ],
    //     "article_image": "https://static01.nyt.com/images/2023/10/16/multimedia/16the-lights-are-on-photo-jqtw/16the-lights-are-on-photo-jqtw-facebookJumbo.jpg",
    //     "article_pub_date": "Oct 16, 2023",
    //     "article_url": "https://www.nytimes.com/2023/10/16/theater/lights-are-on-review.html",
    //     "article_html": "<div><p class=\"css-at9mc1 evys1bk0\"><a class=\"css-yywogo\" href=\"https://www.owenpanettieri.com/\" title=\"\" rel=\"noopener noreferrer\" target=\"_blank\">Owen Panettieri</a>&#8217;s play &#8220;The Lights Are On&#8221; offers a dispiriting preview of what many of our homes may look like in the future.</p><p class=\"css-at9mc1 evys1bk0\">The muddled play, a co-production of <a class=\"css-yywogo\" href=\"https://www.newlighttheaterproject.com/\" title=\"\" rel=\"noopener noreferrer\" target=\"_blank\">New Light Theater Project</a> and Embeleco Unlimited, takes place in the living quarters of Liz (Danielle Ferland), a doomsday prepper who spends her days pacing about her storm-boarded house, examining sundry supplies and sorting jars of canned food. Five years earlier, Hurricane Prudence ravaged her home. &#8220;Afterwards, there wasn&#8217;t a lot worth saving. It all had to go,&#8221; she matter-of-factly tells her neighbor Trish (Jenny Bacon).</p><p class=\"css-at9mc1 evys1bk0\">The play begins when a discombobulated Trish visits Liz because she thinks someone may have broken into her home. The two haven&#8217;t spoken in seven years, yet nothing in Sarah Norris&#8217;s direction conveys a sense of estrangement. Instead, simply hearing Liz&#8217;s voice seems to lower Trish&#8217;s blood pressure by several degrees, and soon they are chatting as easily as if Trish had stopped by for a coffee chat after Sunday services.</p><p class=\"css-at9mc1 evys1bk0\">Initially, the pair present a study in contrasts: Trish, with her silk top and expensive haircut, comes from inherited wealth, whereas Liz, with her loosefitting flannel shirt and mom jeans, is working class. Yet as they catch up and catastrophize about the world, certain selfish similarities between the two women emerge. Trish has always been too preoccupied with her own life to consider the needs of her neighbor; during Hurricane Prudence, she refused to admit Liz and her son, Nathan (Marquis Rodriguez), into the safety of her home. For her part, Liz has turned her house &#8220;into a prison&#8221; for herself and her son, Trish notes.</p></div>",
    //     "article_abstract": null
    // }

    return (
        <Box  sx={{width:'80%'}}>
            <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{ backgroundColor: 'white', color: 'primary.main', fontWeight: 500, width: '100%', '&:hover': { backgroundColor: '#f5f5f5', color: '#262626', opacity: [0.9], } }}
                >
                    Short Summary
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {isLoading &&
                        <>
                            <Typography component="p" sx={{ fontSize: { xs: '10px', md: '15px', textAlign: 'center' } }}>Sit tight while AI is summarizing this news just for you</Typography>
                            <Skeleton />
                            <Box sx={{ border: '1px solid grey', borderRadius: '10px', padding: '5px' }}>
                                <Typography component="p" sx={{ fontSize: { xs: '12px', md: '15px' } }}>Did you know?</Typography>
                                <Typography component="p" sx={{ fontSize: { xs: '12px', md: '15px' } }}>An average person spends 11 hours a day on their digital devices</Typography>
                            </Box>
                        </>
                    }
                    {(!isLoading && !toFetch) &&
                        <>
                            <Typography variant="h6" color="whitesmoke" sx={{ fontWeight: '600' }}>{summary.article_title}</Typography>
                            <Typography id="modal-modal-title" component='p' sx={{ mt: 1 }}>
                                {summary.summary}
                            </Typography>
                        </>
                    }
                    {toFetch &&
                        <>
                            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                                {summaryTitle}
                            </Typography>
                            <Box sx={{display:'flex', justifyContent:'center', margin:'1em'}}><Button variant="contained" color='success' onClick={handleFetchClick}>Get Short Summary</Button></Box>
                        </>
                    }
                </Box>
            </Modal>
        </Box>
    );
}
