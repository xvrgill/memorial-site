import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { Storage } from 'aws-amplify'
// import PropTypes from 'prop-types'

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageData, setImageData] = useState(null)
  // const [galleryElement, setGalleryElement] = useState(null)

  // const testImage = props.imageData[0]
  // console.log(images)

  // const itemData = [
  //   {
  //     img: "https://memorialsiteff04753a871945f28d774c40429a973934133-dev.s3.us-east-1.amazonaws.com/public/memorial-images/3_Singers.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAV2Z4QQ555W6DSXFF%2F20220503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220503T104202Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCQDYm0l3LSzgCw1sGUKH0iNk5ldj9lw4UzaCLGuJiy4AIhANjB1tAoaWEzvC2e3dP%2F6k9d5kpD3CXInOaDMni9KeA4KpEGCFwQABoMNDAxMTY5NDgzNjQzIgx9F6uqTM98Ci7cxbwq7gWj7jzh7l8bJsCX%2FTqRaHZv53OITIQRf3%2FuKr%2F%2B9eT6QDLPqXzhaXL1ZgQeGpSoWBy5%2BX0W9kBjrPd8uPGveg7uaXxwUIptLqb0Mikk2hykaSvEmGvb6pyqRC1RNymx6kI1hLRJU2YxOM39tAkp1irFfo9Mjo%2FqAvIbycjSqGvVUhjW50JtGT8jSdlia8uC04FYjGzJEbdbJOo%2FxU7VczFqGfH6%2FhehtspDL%2BJMdrA%2B2cY%2FNabNbfDNuGvMGgBTBAOoFxXqXbJ%2FI6yiyi%2Bfvbo52rrlWDTzWFLsCakqQF91uIp7wh30tOgC7TE6PXecVj18XVk8FV%2BJjKmryONLKBEljPK2%2B77wI18%2FE6R6gCFnMlKIu0JOxX7yC%2FsA4Z1yAX5xaqchBZR1IKwCWxD9jjhEHuVVc4XysufpwKl1kkUY1FYZGUqxrR6J3J1zGDDgRbHzRS70zoOvI2KmzFH%2FeNkTFm%2BEwZPb74u56XGiU2Ynp%2FoQ46xYsBNvrm3JIu4FWbMn%2Bh7yuC0QTVS2%2BQja%2Fn7yFc27B2ew0%2FUafQ14ob93r4HN407Xsjz0v3quH0ddhHu0eSBe%2BzG%2FIvAP5JKstDFO8vHz0t70F3kKU8tHIl%2Bfcm1IZ8bFtu1A5sjsJ67QQQPvx9z8zQl4zAmcHoRXjT1cr%2BI53S%2BHLRSOZpYwT4voYyY2Ew94uqoJcm%2F6dfuuKLXId0hA9m9Eg2B9niwufGUjVMDPJIR6JW%2FvBgqpmyM16Eb90VwrFbRYMI5ePsEunXvI0nr5RAErroj4uCM4jmJuJV0sQN%2BUTIoLxlr1QcpM1romnhmgfa8hWgLEijXmUitx%2Bc694pujnEaV2SNvy1AlKT1SC9x83tN8taDxkPRWsvclakNgQLrsR7ck1QY%2B7tEWb%2Ba64U1s812ahvLjqPYUSyYY8yjeXTCvRcWfn07U1EqpmRebZQsWh5hodQFj15es68FOk7%2Bj4%2BhwsxUwIcyXi3p6%2B7uH5Dbngnq1n5Qw%2Bo3EkwY6hgJc1fZny5BfKzC%2F5dHv2CPrXQuoAnCd1adaRvGzSddGedpDvU1DDLXFY1V3EU7FlwrCTSPKCWKyqhLA3im4D1TFfor%2BuJLJVZh7pzY8C92%2B4qanNyVaQJow6Az2WeQF3cJwEIJ7zlVwjcmsMRLCtTtUb3IVB2YQYT9zvk7ENkU0axL7oVCJzYGJULdO%2FjMY44A49Ktb%2FdCOURimYp%2FaXkV21YnyeQGVx6Vl%2Fap3KwEiJzooZ%2Bp9H89p8nHvy4zzAyIitX5SPAj4M2LYJOi4OyXf8CZ8XiN%2BSy8Z%2FT1dr1bLgdMSeX3I%2BhsPRPRQvg3l%2Ba8cLMI95tPIy4ICbbd1F%2BzSPS9kTrhT&X-Amz-Signature=d72460c278e3cab9261dc3ed1d7bceb4a4f7c5730999c1e2b035846a5f57360a&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FiOS%2F13.2.3%20lang%2Fjs%20md%2Fbrowser%2FSafari_13.0.3%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.1_js&x-id=GetObject",
  //     title: "Image 1",
  //   },
  //   {
  //     img: "https://memorial-site-data.s3.amazonaws.com/memorial-images/3_Singers.png",
  //     title: "Image 2",
  //   },
  //   {
  //     img: "https://memorial-site-data.s3.amazonaws.com/memorial-images/All_Siblings.png",
  //     title: "image 3",
  //   },
  // ];

  async function getImageList(path) {
    const imgList = await Storage.list(path)
    return imgList
  }


  function getSignedURL(path) {
    return Storage.get(path)
  }

  async function retrieveImages(path) {
    const imgList = await getImageList(path);

    var updatedList = []

    for (let index = 0; index < imgList.length; index++) {
      const element = imgList[index];
      const updatedDictionary = {...element}
      updatedDictionary.index = index
      updatedDictionary.url = await getSignedURL(element.key)
      updatedList.push(updatedDictionary)
    }
    
    return updatedList
  }

  function displayImageList(loadingState, data) {
    if (!loadingState && data) {
      console.log(JSON.parse(JSON.stringify(data)));
      // const urlString1 = 'xyz' + '?w=248&fit=crop&auto=format';
      // const urlString2 = 'data.url' + '?w=248&fit=crop&auto=format&dpr=2 2x';
      const galleryElement =
        <ImageList variant="masonry" sx={{ padding: '10%' }}  cols={3} gap={8}>
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
  }

  // function toggleDisplay() {

  // }

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
