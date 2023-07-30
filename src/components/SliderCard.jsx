import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoading from "./LazyLoadImage";

const SliderCard = ({ title, poster, ratings, releaseDate, ID, mediaType }) => {
  return (
    <Link to={`/details/${mediaType}/${ID}`} className="sliderCard">
      <div>
        <LazyLoading 
        className={'slider_image'} 
        src={`https://image.tmdb.org/t/p/original/${poster}`} />
      </div>
      <div className="details">
        <div>
          <p>{title}</p>
          <span>HD</span>
        </div>
        <div>
          <p>
            <AiFillStar />
            <span>{parseFloat(ratings).toFixed(1)}</span>
          </p>
          <span>{releaseDate.split("-")[0]}</span>
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;
