import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";

const links = ['home', 'events', 'profile', 'feed']

function NavBar(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{
                backgroundColor:'#FFFFFF',
                height: "5em"
            }}>
                <Toolbar style={{
                    height: "100%"
                }}>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                        {links.map(link => {
                            return (
                                <Link style={{
                                    textDecoration: 'none',
                                    color: "#5DB075",
                                    fontSize: "20px"
                                }} to={`/${link}`}>
                                    {link[0].toUpperCase() + link.slice(1)}
                                </Link>
                            )
                        })}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

NavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default NavBar;