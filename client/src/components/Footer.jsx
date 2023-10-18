import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";
import { footerLinks } from "../constants";
import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <Box sx={{backgroundColor:'primary.main'}}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "primary.main",
                    display: "flex",
                    flexDirection:{xs:'column', md:'row'},
                    padding: { xs: '2em', md: '3em 4em' },
                    marginBottom:{xs:'55px', md:'10px'}
                }}
            >
                <Link to='/' style={{ textDecoration: 'none', color: 'white', display: 'flex', justifyContent: {xs:'center',md:'flex-start'}, alignItems: 'center', width: {xs:'100%',md:'35%'} }}>
                    <Typography
                        variant="h3"
                        noWrap
                        component="Link"
                        href="/Home"
                        sx={{
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Parashu
                    </Typography>
                </Link>
                <Box
                    sx={{ display: 'flex',gap:'2em',flexDirection:{xs:'column', md:'row'},justifyContent:{ xs:'flex-start',md:'space-between'}, color: 'white', width: {xs:'100%',md:'65%'}, margin: 'auto' }}
                >
                    {footerLinks.map((value, index) => (
                        <Link to={value.path} style={{color:'whitesmoke', textDecoration:'none'}}>
                            <Typography component="p" key={index} sx={{}}>{value.title}</Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
            <hr />
            <Typography align="center" color='white'>Made with ❤️ by team Parashu🔱</Typography>
        </Box>
    );
};

export default Footer;