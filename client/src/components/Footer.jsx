import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";
import { footerLinks } from "../constants";
import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '1rem',
                    padding: '1rem',
                    borderRadius: '10px',
                    width: 300,
                    backgroundColor: 'primary.dark',
                }}
            >   
                <Link to='/' style={{textDecoration:'none', color: 'white'}}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="Link"
                        href="/Home"
                        sx={{
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        PARASHU
                    </Typography>
                </Link>

            </Box>
            <Container maxWidth="lg" sx={{color: 'white'}}>
                <Box 
                    sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1rem', color: 'white'}}
                >
                    <Box>
                        <Typography variant="h5">{footerLinks[0].title}</Typography>
                        <List dense component='div' role="list">
                            {footerLinks[0].links.map((items)=>(<ListItem align-items="flex-start"> <Link to='/' style={{textDecoration:'none', color: 'white'}}>{items}</Link></ListItem>))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h5">{footerLinks[1].title}</Typography>
                        <List dense component='div' role="list">
                            {footerLinks[1].links.map((items)=>(<ListItem align-items="flex-start"><Link to='/' style={{textDecoration:'none', color: 'white'}}>{items}</Link></ListItem>))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h5">{footerLinks[3].title}</Typography>
                        <List dense component='div' role="list">
                            {footerLinks[3].links.map((items)=>(<ListItem align-items="flex-start"><Link to='/' style={{textDecoration:'none', color: 'white'}}>{items}</Link></ListItem>))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h5">{footerLinks[2].title}</Typography>
                        <List dense component='div' role="list">
                            {footerLinks[2].links.map((items)=>(<ListItem align-items="flex-start"><Link to='/' style={{textDecoration:'none', color: 'white'}}>{items}</Link></ListItem>))}
                        </List>
                    </Box>
                </Box>
            </Container>
            <hr />
            <Typography align="center" color='white'>Made with ❤️ by team Parashu🔱</Typography>
        </Box>
    );
};

export default Footer;