import React, { useState } from "react";
import heroImage from "../assets/strangerThings.jpg";
import { useEffect } from "react";
import { getAllData } from "../utils/requests";
import LazyLoading from './LazyLoadImage';

const Hero = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getAllData().then((data) => setMovie(data?.results));
  }, []);
  
  //getting random movie posters..
  const movie = movies[Math.floor(Math.random() * movies?.length)];

  return (
    <section className="hero">
      <div className="hero_image_container">
        <LazyLoading
          src={`${movie?`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`:heroImage}`}
        />
      </div>
      <div className="hero_overlay">
        <h2>
          Unlimited <span>Entertainment,</span><br />
          Movies, TVs shows, & More.
        </h2>
      </div>
    </section>
  );
};

export default Hero;

