import React from 'react'
import Header from '../components/Header'
import Service from '../components/Service'
import ImageCard from '../components/ImageCard'

const HomePage = () => {
  return (
    <div className='no-overflow'>
      <Header />
      <Service />
      <ImageCard />
    </div>

  )
}

export default HomePage