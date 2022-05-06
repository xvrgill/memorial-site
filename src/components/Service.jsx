import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Service = () => {
    return (
        <div id='service-container'>
            <div className='service-container-item-left'>
                <div className="service-info-text-group">
                    <h3>9 AM</h3>
                    <p>Viewing</p>
                </div>
                <div className="service-info-text-group">
                    <h3>10 AM</h3>
                    <p>Service</p>
                </div>
                <div className="service-info-text-group">
                    <h3>May 6</h3>
                    <p>Date</p>
                </div>
            </div>
            <div className="service-container-item-right">
                <div className="bg-box">
                    <div id="serivce-button-limiter">
                        <button className="shaded-button square-button" id="service-page-button">
                            <div id="service-button-icon-container">
                                <ArrowBackIcon sx={{ color: 'rgb(42, 33, 19, .8)' }} />
                            </div>
                        </button>
                    </div>
                    <div>
                        <h2 style={{ postion:'absolute', fontSize: '5vw', color: '#2A2113' }}>Service Details</h2>
                        <div className='emphasis-rectangle'></div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Service