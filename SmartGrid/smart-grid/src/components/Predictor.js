import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: require("../img/Day.png"),
    thumbnail: require("../img/Day.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
];

const Predictor = () => {
  return (
    <>
      <br></br>
      <Gallery
        images={IMAGES}
        enableLightbox={true}
        // maxRows={3}
        backdropClosesModal
        // currentImage={3}
        // isOpen={ true}
      />
    </>
  );
};

export default Predictor;
