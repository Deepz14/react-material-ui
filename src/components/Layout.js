import React from 'react'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined';
import SubjectOutlined from '@mui/icons-material/SubjectOutlined';
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyle = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4'
  },
})

function Layout({children}) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];

  return (
    <div className={classes.root}>
        {/* App Bar */}
        {/* <AppBar
          elevation={0}
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, padding: `10px 0 10px 5px`}}
         >
          <Typography variant="h5" noWrap component="div">
            Ninja Notes
          </Typography>
        </AppBar> */}

        {/* side bar */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
          <div>
            <Typography variant="h5" noWrap component="div">
              Ninja Notes
            </Typography>
          </div>
          <List>
            {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          </List>
        </Drawer>

        {/* Main content */}
        <div className={classes.page}>
            {children}
        </div>
    </div>
  )
}

export default Layout