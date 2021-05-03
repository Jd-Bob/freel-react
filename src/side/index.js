import React from 'react';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ReorderIcon from '@material-ui/icons/Reorder';
import Phone from '@material-ui/icons/LocalPhone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
  
const styles = {
  sideNav: {
    marginTop: '-60px',
    zIndex: 3,
    marginLeft: '0px',
    position: 'fixed',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};
  
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }
  toggleDrawerStatus = () => {
    this.setState({
      isDrawerOpened: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    })
  }
  render() {
    const { isDrawerOpened } = this.state;
    return (
      <div style={{backgroundColor: '#edfaf1'}}>
         <div style={styles.sideNav}>
            <IconButton onClick={this.toggleDrawerStatus}>
              {!isDrawerOpened ? <ReorderIcon /> : null }
            </IconButton>
          </div>
          <Divider/>
            <Drawer
                variant="temporary"
                open={isDrawerOpened}
                onClose={this.closeDrawer}
            >

            <Link to='/' style={styles.link}>
            <List>
                <ListItem button key='Accueil'>
                <ListItemIcon><HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Accueil' />
                </ListItem>
                </List>
            </Link>
          <Link to='/about' style={styles.link}>
            <List>
              <ListItem button key='Nos propos'>
                <ListItemIcon><AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary='Nos propos' />
              </ListItem>
            </List>
          </Link>
          <Link to='/contact' style={styles.link}>
          <List>
            <ListItem button key='Nous contacter'>
              <ListItemIcon><Phone/>
              </ListItemIcon>
              <ListItemText primary='Nous contacter' />
            </ListItem>
            </List>
          </Link>
        </Drawer>
      </div>
    );
  }
}