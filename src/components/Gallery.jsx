import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Storage } from 'aws-amplify';
// import PropTypes from 'prop-types'

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageData, setImageData] = useState(null)

  async function getImageList(path) {
    const imgList = await Storage.list(path)
    return imgList
  };

  function getSignedURL(path) {
    return Storage.get(path)
  };

  async function retrieveImages(path) {
    const imgList = await getImageList(path);

    var updatedList = []

    for (let index = 0; index < imgList.length; index++) {
      const element = imgList[index];
      const updatedDictionary = { ...element }
      updatedDictionary.index = index
      updatedDictionary.url = await getSignedURL(element.key)
      updatedList.push(updatedDictionary)
    };

    return updatedList
  };

  function displayImageList(loadingState, data) {
    if (!loadingState && data) {
      console.log(JSON.parse(JSON.stringify(data)));
      // const urlString1 = 'xyz' + '?w=248&fit=crop&auto=format';
      // const urlString2 = 'data.url' + '?w=248&fit=crop&auto=format&dpr=2 2x';
      const galleryElement =
        <ImageList variant="masonry" sx={{ padding: '10%' }} cols={3} gap={8}>
          {data.map((item) => (
            <ImageListItem key={item.index}>
              <img
                src={item.url}
                // srcSet={urlString2}
                alt={item.key}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      return galleryElement
    } else {
      return <div><p>loading!</p></div>
    }
  };

  useEffect(() => {
    if (isLoading) {
      retrieveImages('memorial-images/')
        .then((result) => {
          // console.log(result)
          setImageData(result)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    }

  }, [isLoading]);

  return (
    <div className="gallery-container">
      {displayImageList(isLoading, imageData)}
    </div >
  )
};

export default Gallery;
