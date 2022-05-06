import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const DesktopNav = () => {
  return (
    <nav id="nav-desktop">
      <Stack sx={{ padding: '5% 10%' }} direction="row" justifyContent="flex-end" alignItems="center" spacing={4}>
        <Link className='desktop-nav-link' to="/">Home</Link>
        <Link className='desktop-nav-link' to="/eulogy">Eulogy</Link>
        <Link className='desktop-nav-link' to="/gallery">Gallery</Link>
        <Button as={Link} to="/download" variant="outlined" sx={{ backgroundColor:'black', color:'white', fontSize:'1.8vw', fontWeight: 500, border: 'solid, 1rem'}}>Download Program</Button>
      </Stack>
      <Outlet />
    </nav>
  )
}

export default DesktopNav