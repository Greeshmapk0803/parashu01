import React from 'react'
import Box  from '@mui/material/Box'
import { List } from '.'

const SavedArticles = () => {
    return (
        <Box sx={{  border:'2px solid gray',
                    borderRadius:'10px',
                    width:{xs:'97%', md:'75%'},
                    margin:'2em auto',
                    display:'flex',
                    padding:{xs:'0', md:'2em'},
                    alignItems:'center',
                    justifyContent:'space-between',
                    backgroundColor:'primary.main'
                }}>
            <List/>
        </Box>
    )
}

export default SavedArticles