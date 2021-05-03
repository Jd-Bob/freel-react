import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import './App.css';
import Home from '../home';
import Contact from '../contact';
import About from '../about';
import SideBar from '../side';
import Experience from '../experience';
import ExperienceDetails from '../experience-details';
import { experiences } from '../data/project';
  

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    aap: {
        display: 'flex',
        textAlign: 'center',
        paddingRight: `calc(100% - ${0}px)`,
      },
  root: {
    display: 'flex'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,

    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    maxWidth: `100%`,
    backgroundColor: 'green',
    padding: theme.spacing(3),
  },
}));



function App() {
    const classes = useStyles();
  return (
    <div>
        <div >
            <CssBaseline />
            <div className={classes.toolbar} />
        </div>
        <div className={classes.root}>
            <BrowserRouter>
                <SideBar/>
                <div className={classes.toolbar} />
                <Drawer className={classes.drawer} variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="right"
                >
                    <Divider />
                    <List>
                        {experiences.web.map((project, index) => (
                            <Experience  key={project.name} type="web" details={project}/>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {experiences.mobile.map((project, index) => (
                            <Experience  key={project.name} type="mobil" details={project}/>
                        ))}
                    </List>
                </Drawer>
                <Switch>
                    <Route exact path='/' render={props => <Home {...props} /> }/>
                    <Route exact path='/about' render={props => <About {...props} /> }/>
                    <Route exact path='/contact' render={props => <Contact {...props} /> }/>
                    <Route exact path="/experience/:id" render={props => <ExperienceDetails {...props} /> }/>
                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}
  
export default App;