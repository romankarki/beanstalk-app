import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background:"#f0f0f0"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Definition({entry, definition}) {
  const classes = useStyles();
  return (
      <div>
            <h3 >{entry}</h3>
            <Typography className={classes.title}  color="textSecondary" gutterBottom>
                Definition
            </Typography>
            <p style={{textAlign:"justify"}}>{definition}</p>
            <br />
      </div>
  );
}