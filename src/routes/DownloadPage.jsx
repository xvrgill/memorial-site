import React from 'react'
import PDF from '../assets/celebration_of_life.pdf'
import PdfCover from '../assets/pdf_cover.jpg'
// import PrimaryButton from '../components/PrimaryButton'
// import Link from 'react-router-dom'

const DownloadPage = () => {
    return (
        <div className='pdf-page-container'>
            <div className='overlap-parent'>
                <img src={PdfCover} alt="Download the Program" />
                {/* <div className="overlap-child pdf-child-1">
                    <PrimaryButton path='/download' variant='contained' buttonText='Download the Program' styles={{ padding: '2vw', border: 'solid .3rem #E5DAC7', backgroundColor: 'white', fontFamily: 'Mullish', fontSize: '2vw', color: 'black', textDecoration: 'none', boxShadow: 'none', borderRadius: '0px', fontWeight: 'thin' }} />
                </div> */}
            </div>
            <a href={PDF} target='_blank' rel="noopener noreferrer">Download the pdf</a>
        </div>
    )
}

export default DownloadPage