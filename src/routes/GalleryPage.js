import React from "react";
import Gallery from '../components/Gallery'


const GalleryPage = () => {

  // const imageDetails = [
  //   {
  //     img: '3_Singers.png',
  //     title: '3 Singers',
  //   },
  //   {
  //     img: 'All_Siblings-02.png',
  //     title: 'All Siblings 2',
  //   },
  //   {
  //     img: 'Black_Power.png',
  //     title: 'Black Power',
  //   },
  //   {
  //     img: 'Crucian_christmas.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Cruise_Ship.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc Petersen at Old-Time Crucian Christmas_ EWM 2016.jpg Pic 2.jpg',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc-with-Shades-v1.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_Seated_in_Red.jpg',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_Sisters-v2.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_and_Derby.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_and_Peter.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_at_Carnival.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_at_Wedding.jpg',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_in_Frames.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_n_Mapp.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Doc_with_Neices.jpg',
  //     title: '',
  //   },
  //   {
  //     img: 'DoveBkgrd_GuitarPlaying.png',
  //     title: '',
  //   },
  //   {
  //     img: 'Dr. Eugene Petersen, viewing the exhibit he helped create.heic',
  //     title: '',
  //   },
  //   {
  //     img: 'Family_Reunion-03.png',
  //     title: '',
  //   },
  
  // ]

  // imageDetails.map((item) => {
  //   item.img = `https://memorialsiteff04753a871945f28d774c40429a973934133-dev.s3.us-east-1.amazonaws.com/public/memorial-images/${item.img}`;
  //   return item
  // })

  return (
    <div>
      <p>this is the gallery page</p>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
