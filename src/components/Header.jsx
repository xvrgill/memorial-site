import React from 'react'
// import Storage from 'aws-amplify'

const Header = () => {

  

  return (
    <header id="hero" className='container'>
      <div id="hero-text-container">
        <p className='mini-title' style={{fontSize: '1.5vw', margin:'0px', fontWeight:600 }}>Eugene Alexander Petersen</p>
        <p className="date-text mini-title" style={{fontSize: '1.2vw', margin:'0px', marginTop:'3px', marginBottom:'0px'}}>February 3, 1949 - April 2, 2022</p>
        <h1 style={{fontSize: '8vw'}} ><wrapper className="bolder-title">Join Us</wrapper> In The<br/><wrapper className="bolder-title">Celebration</wrapper> Of Life</h1>
        <p style={{ fontSize: '2vw', fontWeight: 300}}>In rememberance of the man that will be forever loved by his family, his friends, and the community at large.</p>
      </div>
    </header>
  );
};

export default Header;
