import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tab,
  useMediaQuery,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '2em',
    color: '#f06292',
    fontFamily: 'Merienda One',
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },

  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    background: '#FFCCE6',
    borderRadius: 0,
    '&:hover': {
      background: '#FFCCE6',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  appbar: {
    background: 'linear-gradient(45deg, white 10%, #f85b93 60%, #ff4081 90%)',
    height: '4em',
    [theme.breakpoints.down('md')]: {
      height: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.7em',
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    color: 'white',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = ({ currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isLoggedIn = currentUser;

  const header = (
    <React.Fragment>
      <Grid container direction="row" justify="flex-end">
        {!currentUser ? (
          <div>
            <Button
              color="inherit"
              className={classes.link}
              style={{
                background: 'none',
                color: '#e91e63',
                marginRight: '0.4em',
                borderRadius: '0.5em',
              }}
            >
              <Link underline="none" href="/auth/signin">
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Login
                </a>
              </Link>
            </Button>
            <Button
              color="inherit"
              className={classes.link}
              style={{ borderRadius: '0.3em' }}
            >
              <Link underline="none" href="/auth/signup">
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Sign Up
                </a>
              </Link>
            </Button>
          </div>
        ) : (
          <div>
            <Button
              color="inherit"
              className={classes.link}
              style={{ borderRadius: '0.3em', marginRight: '0.5em' }}
            >
              <Link underline="none" href="/tickets/new">
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Sell Ticket
                </a>
              </Link>
            </Button>
            <Button
              color="inherit"
              className={classes.link}
              style={{ borderRadius: '0.3em', marginRight: '0.5em' }}
            >
              <Link underline="none" href="/orders">
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  My Orders
                </a>
              </Link>
            </Button>
            <Button
              style={{
                borderRadius: '0.3em',
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              <div
                className="dropdown"
                style={{
                  background: 'white',
                  borderColor: '#f06292',
                }}
              >
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    color: '#f06292',
                    fontSize: '1.4em',
                    fontFamily: 'Merienda One',
                    background: 'none',
                    borderColor: '#f06292',
                    borderRadius: '0.1em',
                  }}
                >
                  {isLoggedIn ? isLoggedIn.name : ''}
                </a>

                <div
                  className="dropdown-menu"
                  style={{}}
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link underline="none" href="/auth/signout">
                    <a
                      className="dropdown-item"
                      underline="none"
                      style={{ color: '#f06292', textDecoration: 'none' }}
                    >
                      Sign Out
                    </a>
                  </Link>
                </div>
              </div>
            </Button>
          </div>
        )}
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <Grid container direction="row" justify="flex-end">
        <div
          style={{
            marginRight: '1em',
          }}
        >
          <Typography>{isLoggedIn ? 'Sign-In as' : ''}</Typography>
          <Typography style={{ color: '#f06292', fontSize: '1.4em' }}>
            {isLoggedIn ? isLoggedIn.name : ''}
          </Typography>
        </div>
      </Grid>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbarMargin} />
        <div className={classes.drawerHeader}>
          <Link href="/">
            <a
              className={classes.title}
              style={{
                textDecoration: 'none',
                color: '#f06292',
                textTransform: 'none',
              }}
            >
              FriendlyTix
            </a>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {/* <List>{links}</List> */}
        {!currentUser ? (
          <List>
            <Link href="/auth/signin" underline="none">
              <ListItem
                button
                color="inherit"
                className={classes.link}
                style={{ background: 'none', color: '#e91e63' }}
              >
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: '#e91e63', textDecoration: 'none' }}
                >
                  <ListItemText>Login</ListItemText>
                </a>
              </ListItem>
            </Link>
            <Link href="/auth/signup" underline="none">
              <ListItem button color="inherit" className={classes.link}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <a
                  underline="none"
                  className="padding: 0"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <ListItemText>Sign Up</ListItemText>
                </a>
              </ListItem>
            </Link>
          </List>
        ) : (
          <React.Fragment>
            <List>
              <Link href="" underline="none">
                <ListItem
                  button
                  color="inherit"
                  className={classes.link}
                  style={{ background: 'none', color: '#2196f3' }}
                >
                  <ListItemIcon>
                    <LockIcon style={{ color: '#e91e63' }} />
                  </ListItemIcon>
                  <a
                    underline="none"
                    className="padding: 0"
                    style={{ color: '#2196f3', textDecoration: 'none' }}
                  >
                    <ListItemText>Ticket</ListItemText>
                  </a>
                </ListItem>
              </Link>
              <Link href="" underline="none">
                <ListItem
                  button
                  color="inherit"
                  className={classes.link}
                  style={{ background: 'none', color: '#2196f3' }}
                >
                  <ListItemIcon>
                    <LockIcon style={{ color: '#66bb6a' }} />
                  </ListItemIcon>
                  <a
                    underline="none"
                    className="padding: 0"
                    style={{ color: '#673ab7', textDecoration: 'none' }}
                  >
                    <ListItemText>Order</ListItemText>
                  </a>
                </ListItem>
              </Link>
            </List>
            <Divider style={{ marginTop: '15em' }} />
            <List style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItem
                style={{
                  color: '#ff1744',
                  marginTop: '1em',
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <ListItemText>Danger </ListItemText>
              </ListItem>
            </List>
            <List>
              <Link href="/auth/signout" underline="none">
                <ListItem
                  button
                  color="inherit"
                  className={classes.link}
                  style={{ background: '#ff1744' }}
                >
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <a
                    className="padding: 0"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <ListItemText>Sign Out</ListItemText>
                  </a>
                </ListItem>
              </Link>{' '}
            </List>
          </React.Fragment>
        )}
      </SwipeableDrawer>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar style={{ height: 0 }}>
          {matchesXS ? (
            <IconButton
              onClick={() => setOpen(!open)}
              className={classes.drawerIconContainer}
              disableRipple
            >
              <MenuIcon className={classes.drawerIcon} />
            </IconButton>
          ) : (
            <div></div>
          )}
          <Link href="/">
            <a
              className={classes.title}
              style={{
                textDecoration: 'none',
                color: '#f06292',
                textTransform: 'none',
              }}
            >
              FriendlyTix
            </a>
          </Link>
          {matchesXS ? drawer : header}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default Header;
