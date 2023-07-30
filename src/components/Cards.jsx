import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/csaff-no-poster.jpg";
import LazyLoading from "./LazyLoadImage";

const Cards = ({
  image,
  titleName,
  releaseDate = "2023-01-01",
  ID,
  mediaType,
}) => {
  return (
    <Link to={`/details/${mediaType}/${ID}`} className="cards">
      <aside>
        <LazyLoading
          className={"cardImage"}
          src={image ? `https://image.tmdb.org/t/p/original${image}` : notFound}
        />
        <div>
          <span>{titleName}</span>
          <span>{releaseDate.split("-")[0]}</span>
        </div>
      </aside>
    </Link>
  );
};

export default Cards;
