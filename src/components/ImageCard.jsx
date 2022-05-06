import React from 'react'
import PrimaryButton from './PrimaryButton'

const ImageCard = () => {
    return (
        <div className='image-card' style={{paddingTop:'10%', paddingBottom: '10%', marginTop: '3vh'}}>
            <div className="black-border-thin image-card-content overlap-parent">
                <div className="cropped-image-container no-overflow">
                    <img src="https://memorial-site-data.s3.amazonaws.com/memorial-images/UncEugene_Singing-3.png" alt="Eugene Singing" className="card-img" />
                </div>
                <div className="overlap-child child-1">
                    <h2 className="image-card-title">Eulogy</h2>
                </div>
                <div className="overlap-child child-2">
                    <p>
                    Doc’s love for his family, his hometown of Frederiksted, and his island home was spread everywhere he went...because he lived a full life. And if you close your eyes and listen carefully, you will hear his hearty laugh and reflect on the precious memories he left in each of our hearts to cherish along the way.
                    </p>
                </div>
                <div className="overlap-child child-3">
                    <PrimaryButton styles={{ padding: '2vw', border: 'solid .3rem #E5DAC7', backgroundColor: 'white', fontFamily: 'Mullish', fontSize: '2vw', color: 'black', textDecoration: 'none', boxShadow: 'none', borderRadius: '0px', fontWeight: 'thin' }} path='/eulogy' variant='contained' buttonText='Read Full Eulogy' />
                </div>
            </div>
        </div>
    )
}

export default ImageCard