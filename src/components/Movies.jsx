import { useEffect, useState } from "react";
import Cards from "./Cards";
import { getDiscoverMovies, getMoviesGenres } from "../utils/requests";
import Spinners from "./Spinners";

const Movies = () => {
  const [movieGenre, setMovieGenre] = useState([]);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(28);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovie([]);
    setPage(1);
  }, [genre]);

  useEffect(() => {
    getMoviesGenres().then((genres) => setMovieGenre(genres?.genres));
    getDiscoverMovies(genre, page).then((data) => {
      setMovie((prev) => [...prev, ...data.results]);
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
    <section className="explore_movies">
      <div className="movies_upper_cotainer">
        <span>Explore Movies</span>
        <div className="sorting">
          <select id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option value="" defaultValue={""} hidden>
              Select Genre
            </option>
            {movieGenre?.map((item) => (
              <option key={item.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MoviesExplore movie={movie} />
      {loading && <Spinners color={"#CF0"} loading={loading} />}
    </section>
  );
};

export default Movies;

const MoviesExplore = ({ movie }) => {
  return (
    <div className="movies_lower_container">
      {movie.map((item, index) => (
        <Cards
          key={index}
          titleName={item?.title}
          releaseDate={item?.release_date}
          image={item?.poster_path}
          ID={item?.id}
          mediaType={"movie"}
        />
      ))}
    </div>
  );
};
