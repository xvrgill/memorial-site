import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const MobileNav = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id="nav-mobile">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem as={Link} to="/" onClick={handleClose}>Home</MenuItem>
                <MenuItem as={Link} to="/service" onClick={handleClose}>Service</MenuItem>
                <MenuItem as={Link} to="/eulogy" onClick={handleClose}>Eulogy</MenuItem>
                <MenuItem as={Link} to="/gallery" onClick={handleClose}>Gallery</MenuItem>
                <MenuItem as={Link} to="/download" onClick={handleClose}>Download the Program</MenuItem>
            </Menu>
        </div>
    );
}

export default MobileNav