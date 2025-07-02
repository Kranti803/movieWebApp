import React from "react";
import { BsPlayFill } from "react-icons/bs";
import CircularProgressBar from "./CircularProgressbar";
import LazyLoading from "./LazyLoadImage";
import { Link } from "react-router-dom";

const DetailSection = ({ details, setPopUp, id, mediaType }) => {
  return (
    <div className="upper_details">
      <LazyLoading
        src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
      />
      <div className="upper_details_overlay">
        <div className="overlay_details">
          <div className="overlay_details_left">
            <LazyLoading
              className={"detail_overlay_img"}
              src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
            />
          </div>
          <div className="overlay_details_right">
            <h2>{details?.original_name || details?.original_title}</h2>
            <p>{details?.tagline}</p>
            <div className="right_one">
              {details?.genres?.map((item) => (
                <span key={item?.id}>{item.name}</span>
              ))}
            </div>
            <div className="right_two">
              <CircularProgressBar vote={details?.vote_average} />
              <span>User Score</span>
              <Link to={`/details/${mediaType}/${id}/play `}>
                <button>
                  <BsPlayFill size={25} />
                  Play
                </button>
              </Link>
            </div>
            <div className="right_three">
              <h2>Overview</h2>
              <p>{details?.overview}</p>
            </div>
            <div className="right_four">
              {details?.created_by?.map((item) => (
                <h3 key={item.id}>
                  <span>{item.name}</span>
                  <span>Creator</span>
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
