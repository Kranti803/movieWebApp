import React, { useEffect, useState } from "react";
import { getTrending, getUpcoming } from "../utils/requests";
import Hero from "./Hero";
import SliderCard from "./SliderCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcoming().then((data) => setUpcoming(data?.results));
    getTrending().then((data) => setTrending(data?.results));
  }, []);

  return (
    <>
      <Hero />
      <section className="home">
        <p>
          <span>Online Streaming</span>
        </p>
        <div className="slider_section_container">
          <SliderSection section={trending} title={"Trending"} sliderId={"1"} />
        </div>
        <div className="slider_section_container">
          <SliderSection section={upcoming} title={"Upcoming"} sliderId={"2"} />
        </div>
      </section>
    </>
  );
};
export default Home;

export const SliderSection = ({ section, title, sliderId }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider_container" + sliderId);
    slider.scrollLeft = slider.scrollLeft - 650;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider_container" + sliderId);
    slider.scrollLeft = slider.scrollLeft + 650;
  };

  return (
    <>
      <h4>{title}</h4>
      <div className="slider_buttons">
        <button onClick={slideLeft}>
          <AiOutlineLeft size={25} />
        </button>
        <button onClick={slideRight}>
          <AiOutlineRight size={25} />
        </button>
      </div>

      <div className="slider" id={"slider_container" + sliderId}>
        {section?.map((item) => (
          <SliderCard
            key={item?.id}
            title={item?.title}
            poster={item?.poster_path}
            ratings={item?.vote_average}
            releaseDate={item?.release_date}
            fromSearch={false}
            ID={item?.id}
            mediaType={item?.media_type || "movie"}
          />
        ))}
      </div>
    </>
  );
};
