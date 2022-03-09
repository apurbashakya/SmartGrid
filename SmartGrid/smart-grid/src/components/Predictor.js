import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: require("../img/pre1.png"),
    thumbnail: require("../img/pre1.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: require("../img/sgd_basic.png"),
    thumbnail: require("../img/sgd_basic.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Chart", title: "Chart" }],
    caption: "",
  },
  {
    src: require("../img/sgd_better.png"),
    thumbnail: require("../img/sgd_better.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "",
  },
  {
    src: require("../img/sgd_optimizing_number_of_days.png"),
    thumbnail: require("../img/sgd_optimizing_number_of_days.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "",
  },
];

const Predictor = () => {
  return (
    <>
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
