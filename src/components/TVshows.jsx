import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { getTVshows, getTVshowsGenre } from "./../utils/requests";
import Spinners from "./Spinners";

const TVshows = () => {
  const [tvShoweGenre, setTVshowGenre] = useState([]);
  const [tvShows, setTVshows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setTVshows([]);
    setPage(1);
  }, [genre]);

  useEffect(() => {
    getTVshowsGenre().then((genres) => setTVshowGenre(genres?.genres));
    getTVshows(genre, page).then((data) => {
      setTVshows((prev) => [...prev, ...data?.results]);
      setLoading(false);
    });
  }, [genre, page]);

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  return (
    <section className="explore_tvshows">
      <div className="tvshows_upper_container">
        <span>Explore TV Shows</span>
        <div className="sorting">
          <select id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option value="" defaultValue={""} hidden>
              Select Genre
            </option>
            {tvShoweGenre?.map((item) => (
              <option key={item.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <TVshowsExplore tvShows={tvShows} />
      {loading && <Spinners loading={loading} />}
    </section>
  );
};

export default TVshows;

const TVshowsExplore = ({ tvShows }) => {
  return (
    <div className="tvshows_lower_container">
      {tvShows.map((item) => (
        <Cards
          key={item?.id}
          titleName={item?.name}
          releaseDate={item?.first_air_date}
          image={item?.poster_path}
          ID={item?.id}
          mediaType={"tv"}
        />
      ))}
    </div>
  );
};
