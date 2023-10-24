import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { TopicGrid } from '..';

export default function BasicAccordion() {
    return (
        <Box>
            <Accordion 
            sx={{backgroundColor:'primary.dark',
                color:'whitesmoke',
                border:'2px solid gray',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Categories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TopicGrid />
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
