import React, { useState } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  navbar: {
    position: "fixed",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  menu: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
    },
  },
  menuItem: {
    padding: '10px 20px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const routes = useRoutes([
    { path: '/', element: <Typography variant="h6" className={classes.title}>
      <Link to="/" className={classes.link}></Link></Typography> },
    { path: '/gangs', element: <Typography variant="h6" className={classes.title}>
      <Link to="/gangs" className={classes.link}></Link></Typography> },
    { path: '/challengers', element: <Typography variant="h6" className={classes.title}>
      <Link to="/challengers" className={classes.link}></Link></Typography> },
  ]);

  const menu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{ disablePadding: true }}
    >
      <MenuItem className={classes.menuItem} component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem className={classes.menuItem} component={Link} to="/gangs" onClick={handleMenuClose}>Gangs</MenuItem>
      <MenuItem className={classes.menuItem} component={Link} to="/challengers" onClick={handleMenuClose}>Challengers</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={`${classes.appBar} ${classes.navbar}`}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className={classes.menu}>
            {routes}
          </div>
        </Toolbar>
      </AppBar>
      {menu}
    </div>
  );
}

export default Navbar;
