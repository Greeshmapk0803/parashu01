import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { TipsAndUpdatesIcon, QuizIcon, QuestionMarkIcon, KeyboardArrowDownIcon, AiAction } from '../assets/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({ summaryTitle }) {
    const navigate = useNavigate();
    const location = useLocation()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // eslint-disable-next-line
    const [openModal, setOpenModal] = React.useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // eslint-disable-next-line
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    // eslint-disable-next-line
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleContextClick = () => {
        setAnchorEl(null);
        // console.log(summaryTitle)
        navigate('/context/result?newsURL=' + encodeURIComponent(summaryTitle));
    }

    return (
        <>
            {!location.pathname === 'home' ? (<Box  sx={{ width: '100%', marginTop: {  md: '10px' } }}>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ backgroundColor: 'white', color: 'primary.main', fontWeight: 500, width: '100%', '&:hover': { backgroundColor: '#f5f5f5', color: '#262626', opacity: [0.9], } }}
                >
                    <img src={AiAction} alt="AI Action" style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                    AI Options
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleContextClick} disableRipple>
                        <TipsAndUpdatesIcon />
                        Get Context
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <QuizIcon />
                        Quiz Me!
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <QuestionMarkIcon />
                        Possible Questions
                    </MenuItem>
                </StyledMenu>
            </Box>) : (<Box  sx={{ width: '100%', margin: {  md: '0 10px 0 0' } }}>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ backgroundColor: 'white', color: 'primary.main', fontWeight: 500, width: '100%', '&:hover': { backgroundColor: '#f5f5f5', color: '#262626', opacity: [0.9], } }}
                >
                    <img src={AiAction} alt="AI Action" style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                    AI Options
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleContextClick} disableRipple>
                        <TipsAndUpdatesIcon />
                        Get Context
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <QuizIcon />
                        Quiz Me!
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <QuestionMarkIcon />
                        Possible Questions
                    </MenuItem>
                </StyledMenu>
            </Box>)}
                   </>
    );
}