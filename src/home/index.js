import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { all } from '../data/techno';



const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'right',
    flexWrap: 'wrap',
    paddingRight: '40%',
    //marginRight: '50%',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  const handleClick = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <h1 style={{paddingRight: '30%'}}>Voici quelques technologies que nous maitrisons:</h1>
        <div className={classes.root}>
        
        {all.map(techno => (<Chip
          avatar={<Avatar alt={techno.name} src={process.env.PUBLIC_URL + techno.logo}></Avatar>}
          label={techno.name}
          clickable
          onClick={handleClick(techno.link)}
          variant="outlined"
        />
        ))}
      </div>
    </div>
    
  );
}