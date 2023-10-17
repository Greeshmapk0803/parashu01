import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', margin:'3em'}}>
            <Link to='/dnd'>
                <Button variant="contained" color="success">
                    Drag and Drop
                </Button>
            </Link>
        </Box>

    )
}

export default Landing