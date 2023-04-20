import React, { useState } from 'react';
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import gangues from '../data/gangues';

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
    color: 'black',
  },
}));

const Gangs = () => {
  const classes = useStyles();
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <img src='logo_eris.png' alt='Eris Logo' />
        {gangues.map((gang) => (
          <Accordion key={gang.id} style={{ marginBottom: "50px", backgroundColor: "#BB0048", }} expanded={expandedPanel === gang.id} onChange={handleAccordionChange(gang.id)}>
            <AccordionSummary
              aria-controls={`panel${gang.id}-content`}
              id={`panel${gang.id}-header`}
            >
              <Typography variant="h4" component="h2" className={classes.text}>
                {gang.nome}
              </Typography>
            </AccordionSummary>
            <AccordionDetails  style={{ marginBottom: "20px" }}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={gang.imagem} title={gang.nome} />
                  <CardContent>
                    <Typography variant="subtitle1" color="text.secondary" component="div" className={classes.text}>
                      {gang.descricao}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="div" className={classes.text}>
                      Chefe: {gang.leader}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p" className={classes.text}>
                      Budget: {gang.budget}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Gangs;
