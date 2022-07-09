import React from 'react'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 240;

function Layout({children}) {
  return (
    <div>
        {/* App Bar */}
        <div>App Bar</div>

        {/* side bar */}
        <div>Side Bar</div>

        {/* Main content */}
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout