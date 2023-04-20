import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './pages/Home';
import Gangs from './pages/Gangs';
import Challengers from './pages/Challenges';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/gangs" style={{ textDecoration: 'none', color: 'inherit' }}>Gangs</Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/challengers" style={{ textDecoration: 'none', color: 'inherit' }}>Challengers</Link>
                </Typography>
            </Toolbar>
            </AppBar>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gangs" element={<Gangs />} />
            <Route path="/challengers" element={<Challengers />} />
        </Routes>
    </div>
);
}

export default Navbar;
