import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const DesktopNav = () => {
  return (
    <nav id="nav-desktop">
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={4}>
        <Link to="/">Home</Link>
        <Link to="/eulogy">Eulogy</Link>
        <Link to="/service">Service</Link>
        <Link to="/gallery">Gallery</Link>
        <Button as={Link} to="/download" variant="outlined">Download Program</Button>
      </Stack>
      <Outlet />
    </nav>
  )
}

export default DesktopNav