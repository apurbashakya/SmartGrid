import React from "react";
// import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";
import '../index.css'

const IMAGES = [
  {
    src: require("../img/pre1.png"),
    thumbnail: require("../img/pre1.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [{ value: "RMSE of Different ML Models", title: "RMSE of Different ML Models" }],
    caption: "",
  },
  {
    src: require("../img/sgd_basic.png"),
    thumbnail: require("../img/sgd_basic.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "SGD Predictor Analysis", title: "SGD Predictor Analysis" }],
    caption: "",
  },
  {
    src: require("../img/sgd_better.png"),
    thumbnail: require("../img/sgd_better.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [{ value: "SGD with Hyperparameters Optimised", title: "SGD with Hyperparameters Optimised" }],
    caption: "SGD with Hyperparameters Optimised",
  },
  {
    src: require("../img/sgd_optimizing_number_of_days.png"),
    thumbnail: require("../img/sgd_optimizing_number_of_days.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [{ value: "SGD analysis with different no. of days", title: "SGD analysis with different no. of days" }],
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
