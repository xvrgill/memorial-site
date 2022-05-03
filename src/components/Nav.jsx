import React from 'react'
import { useMediaQuery } from '@mui/material'
import MobileNav from './mobile/MobileNav'
import DesktopNav from './desktop/DesktopNav'

const Nav = () => {

  const isDesktop = useMediaQuery('(min-width: 960px)')

  return (
    <div>
      {isDesktop ? <DesktopNav /> : <MobileNav />}
    </div>
  )
}

export default Nav