import * as React from 'react';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { ExpandMoreIcon } from '../assets/icons';
import { Box } from '@mui/material';

export default function FadeMenu (props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white', display: 'block', margin: '0 1em', fontWeight: 500, fontSize: '16px', '&:hover': {} }}
            >
                <Box sx={{display:'flex', alignItems:'center', fontSize:'14px'}}>
                    {props.text}
                    <ExpandMoreIcon/>
                </Box>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {props.options.map((value, index) => (
                    <Link to={value.path} style={{ textDecoration: 'none', color: 'black' }}><MenuItem key={index} onClick={handleClose}>{value.title}</MenuItem></Link>
                ))}
            </Menu>
        </div>
    );
}