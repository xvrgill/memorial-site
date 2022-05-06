import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

const PrimaryButton = ({ path, variant, buttonText, styles }) => {
    return (
        <div>
            <Button as={Link} to={path} variant={variant} sx={styles}>{buttonText}</Button>
        </div>
    )
}

PrimaryButton.propTypes = {
    path: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    buttonText: PropTypes.string
}

export default PrimaryButton