import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box>
       <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MyBlog
            </Typography>
            <Link to="/" >
            <Button sx={{color:"#ffffff"}}>
                Home
            </Button>
            </Link>
            <Link to="/about">
            <Button sx={{color:"#ffffff"}}>
                About
            </Button>
            </Link>

            <Link to="/contact">
            <Button sx={{color:"#ffffff"}}>
                Contact
            </Button>
            </Link>
        </Toolbar>
       </AppBar>
    </Box>
  )
}

export default NavBar