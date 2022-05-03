import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const Gallery = () => {
  const itemData = [
    {
      img: "https://media-be.chewy.com/wp-content/uploads/2021/06/14090727/AmericanPitBullTerrier-FeaturedImage-1024x615.jpg",
      title: "Image 1",
    },
    {
      img: "https://memorial-site-data.s3.amazonaws.com/memorial-images/3_Singers.png",
      title: "Image 2",
    },
    {
      img: "https://memorial-site-data.s3.amazonaws.com/memorial-images/All_Siblings.png",
      title: "image 3",
    },
  ];

  return (
    <ImageList
      variant="masonry"
      cols={3}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
