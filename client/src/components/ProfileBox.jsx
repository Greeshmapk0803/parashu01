import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { context } from '../assets/images';

const ProfileBox = () => {
    return (
        <Box sx={{  border:'2px solid gray', 
                    borderRadius:'10px',
                    width:{xs:'97%', md:'75%'}, 
                    margin:'auto',
                    padding:'2em',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                }}>
            <Box sx={{  
                        display:'flex',
                        alignItems:'center',
                        width:'100%',
                    }}>
                <Box sx={{width:'300px'}}>
                    <img src={context} alt="" style={{
                        width:'100%', 
                        borderRadius:'1000px'
                    }}/>
                </Box>
                <Box sx={{
                    margin:'3em',
                }}>
                    <Typography variant='h3'>Preetham Naik</Typography>
                    <Typography variant='h6'>preethamgr123@gmail.com</Typography>
                    <Typography variant='h6'>Joined on 5 October 2023</Typography>
                </Box>
                    <Button variant="contained" color='error'>Contained</Button>
            </Box>
        </Box>
    )
}

export default ProfileBox