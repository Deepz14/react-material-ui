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
import {Root, MainContent} from './styled/LayoutStyled';
const drawerWidth = 240;

function Layout({children}) {
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
    <Root>
        {/* App Bar */}
        <AppBar
          elevation={0}
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, padding: `0 0 8px 0`, background: '#f8f5f9'}}
         >
           <Typography variant="h5" noWrap component="div" textAlign={'right'} sx={{padding: '10px 25px 5px 10px'}}>
              Ninja Notes
            </Typography>
        </AppBar>

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
            <Typography variant="h5" noWrap component="div" sx={{padding: '10px 0 5px 20px'}}>
              Ninja Notes
            </Typography>
          </div>
          <List>
            {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              sx={{
                background: location.pathname == item.path ? '#efcef0' : null
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          </List>
        </Drawer>

        {/* Main content */}
        <MainContent>
          {children}
        </MainContent>
    </Root>
  )
}

export default Layout