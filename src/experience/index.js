import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';

import './index.css';

const styles = makeStyles((theme) => ({
  
	root: {
	  flexGrow: 1
	},
	paper: {
	  padding: theme.spacing(3),
	  margin: 'auto',
	  maxWidth: '100%',
	},
	image: {
	  width: 128,
	  height: 128,
	},
	img: {
	  margin: 'auto',
	  display: 'block',
	  maxWidth: '100%',
	  maxHeight: '100%',
	},
    link: {
        // color: 'black',
        textDecoration: 'none',
      }
  }));

  const handleLinkClick = (url) => {
      console.log('coucocuou')
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  

export default function Experience(props) {
    // let history = useHistory();
    console.log('Experience', props)
    const showDetails = (show) => {
        
        // if (props && props !== {} && show) {
        //     console.log('coucou show details', props);
        //     history.push({
        //         pathname: `/experience/${props}`
        //     });
        // }
        
      }
    const classes = styles();
    const details = false;
    return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
            {/* <ButtonBase> */}
            <Grid item>
                <div className={classes.image}>
                    <Link to={`/experience/${props.type}-${props.details.name}`} style={{textDecoration: 'none', color: 'black'}}>
                    <img className={classes.img} alt="complex" src={process.env.PUBLIC_URL + props.details.image} />
                    </Link>
                {/* <img className={classes.img} alt="complex" src={logo} /> */}
                </div>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                        domaine: {props.details.domain}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        technologie: {props.details.techno[0].framework}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        contexte: {props.details.context}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }} >
                        <ButtonBase onClick={() => handleLinkClick(props.details.link)}>voir le site</ButtonBase>
                    </Typography>
                </Grid>
                </Grid>
                <Grid item>
                <Typography variant="subtitle1">
                    <img src={process.env.PUBLIC_URL + '/' + props.details.techno[0].framework + '.png'} style={{maxWidth: '30px', maxHeight: '30px'}}/>
                </Typography>
                </Grid>
            </Grid>
            {/* </ButtonBase> */}
            </Grid>
        </Paper>
    </div>

    );
}