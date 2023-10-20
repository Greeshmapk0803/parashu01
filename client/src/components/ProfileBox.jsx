import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { context } from '../assets/images';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

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
                        flexDirection:{xs:'column',md:'row'},
                        alignItems:'center',
                        width:'100%',
                        margin:'auto'
                    }}>
                <Box sx={{width:{xs:'200px',md:'300px'}}}>
                    <img src={context} alt="" style={{
                        width:'100%',
                        borderRadius:'1000px'
                    }}/>
                </Box>
                <Box sx={{
                    margin:'3em',
                }}>
                    <Typography sx={{fontSize:{xs:'35px', md:'50px'}, }}>Preetham Naik</Typography>
                    <Typography sx={{fontSize:{xs:'15px', md:'20px'},display:'flex', alignItems:'center', color:'gray'}}><ContactMailRoundedIcon sx={{marginRight:'10px'}}/>preethamgr123@gmail.com</Typography>
                    <Typography sx={{fontSize:{xs:'15px', md:'20px'}, display:'flex', alignItems:'center', color:'gray'}}><ExitToAppRoundedIcon sx={{marginRight:'10px'}}/>Joined on 5 October 2023</Typography>
                </Box>
                <Button variant="contained" color='error'>Log Out</Button>
            </Box>
        </Box>
    )
}

export default ProfileBox