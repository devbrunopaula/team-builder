import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Switch,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Link,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip'
import AddMemberModal from '../Modal/AddModal'
import { useDispatch, useSelector } from 'react-redux'
import { modalTogglePlus, addUsers, deleteUser } from '../../redux/Actions'

// Compoments Import
import { mainListItems } from './listItems'
import MemberHeader from '../../components/Header/MembersHeaders'
// For Switch Theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Search from '../Header/Search'
import MemberCard from '../Card/Card'
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Bruno Paula
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '240',
  },
  members: {},
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function Dashboard() {
  const modalToggle = useSelector((state) => state.toggle)
  const data = useSelector((state) => state.members.users)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [darkState, setDarkState] = useState(false)
  const palletType = darkState ? 'dark' : 'light'
  const mainPrimaryColor = darkState ? '#6c6c6c' : '#ff324d'
  const mainSecondaryColor = darkState ? '#181F32' : '#2B2F3A'

  const [users, setNewUser] = useState(data.users)

  // Dark Theme &
  // Material UI Theme Styles
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      button: {
        main: '#ec3944',
      },
    },
  })

  //   Modal Toggles

  function toggleModal() {
    dispatch(modalTogglePlus())
  }

  const classes = useStyles()
  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  // Add Dummy Data

  const newUser = () => {
    const user = {
      id: 1,
      name: 'Bruno Paula',
      title: 'Front End Developer',
    }
    newUser1()
    dispatch(addUsers(user))
  }
  const newUser1 = () => {
    const user = {
      id: 2,
      name: 'John Smith',
      title: 'UI / UX',
      email: 'test@gmail.com',
    }
    dispatch(addUsers(user))
  }

  useEffect(() => {}, [users])

  const toggleBollean = modalToggle.addMembersModal === true

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position='absolute'
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
              Lambda Team Members
            </Typography>
            <Tooltip title='Add Team Member' aria-label='add'>
              <Fab
                size='small'
                color='secondary'
                aria-label='add'
                className={classes.margin}
              >
                <AddIcon
                  onClick={() => toggleModal()}
                  toggle={modalToggle.addMembersModal}
                />
              </Fab>
            </Tooltip>
            <Switch checked={darkState} onChange={handleThemeChange} />
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar
              alt='Uddeshya Singh'
              src='../static/image/profilePicture.jpg'
            />
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          {/* Modal */}

          <AddMemberModal toggle={toggleBollean} />
          <div className={classes.appBarSpacer} />
          <Grid>
            <Paper>
              <div
                className='team-members'
                style={{ background: darkState ? 'none' : '#dfe4ee' }}
              >
                <h5>Team Members</h5>

                <Paper>
                  <Box className={'search'} display='flex' alignItems='center'>
                    {' '}
                    <input type='text' placeholder='Search' />
                    <SearchIcon />
                  </Box>
                </Paper>
              </div>
              <div className='second_heading'>
                <h4>
                  {data.length}
                  {data.length <= 1 ? ' Member' : ' Members'}
                </h4>
              </div>
            </Paper>
          </Grid>
          <Container maxWidth='lg' className={classes.container}>
            <div className='members_grid'>
              {/* Mapping Users Card */}
              {data.map((user) => {
                return (
                  <div>
                    <MemberCard key={user.id} data={user} />
                    <Button onClick={(e) => dispatch(deleteUser(user.id))}>
                      Delete
                    </Button>
                  </div>
                )
              })}
            </div>
          </Container>

          <Box display='flex' justifyContent='flex-end' m={1} p={1}>
            <Tooltip title='Add Team Member' aria-label='add'>
              <Fab color='primary' aria-label='add' className={classes.margin}>
                <AddIcon onClick={newUser} />
              </Fab>
            </Tooltip>
          </Box>
        </main>
      </div>
    </ThemeProvider>
  )
}
