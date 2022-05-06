import React from 'react'
import PropTypes from 'prop-types'

const EulogyParagraph = ({ imagePath, imageAlt, paragraphText, paragraphSide }) => {
  if (paragraphSide === 'right') {
    return (
        <div className='eulogy-paragraph' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', columnGap: '3vw', padding: '0 10%', marginTop: '0'}}>
            <div className="eulogy-paragraph-img-container">
                <img style={{ width: '20vw', maxWidth: '800px' }} src={ imagePath } alt={ imageAlt } />
            </div>
            <div className='eulogy-paragraph-text-container' >
                <p>{ paragraphText }</p>
            </div>
        </div>
      )
  } else if (paragraphSide === 'left') {
    return (
        <div className='eulogy-paragraph'>
            <div className='eulogy-paragraph-text-container'>
                <p>{ paragraphText }</p>
            </div>
            <div className="eulogy-paragraph-img-container">
                <img src={ imagePath } alt={ imageAlt } />
            </div>
        </div>
      )
  }
}

EulogyParagraph.defaultProps = {
    paragraphSide: 'right'
}

EulogyParagraph.propTypes = {
    imagePath: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    paragraphText: PropTypes.string.isRequired,
    paragraphSide: PropTypes.string
}

export default EulogyParagraph