import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    padding: theme.spacing(2),
    marginTop: '60px',
    width: '100%',
  },
  paper: {
    backgroundColor: '#BB0048',
    width: '300px',
    margin: theme.spacing(2),
  },
  card: {
    backgroundColor: '#BB0048',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  media: {
    height: '300px',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(2),
  },
  text: {
    color: 'white',
  },
}));

const Challenges = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <img src='logo_eris.png' alt='Eris Logo' />
              <Typography variant="h4" component="h2" className={classes.text}>
                COMING SOON
              </Typography>
      </div>
    </div>
  );
};

export default Challenges;
