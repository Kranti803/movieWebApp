import React, { useEffect, useState } from "react";
import { getSearchResults } from "../utils/requests";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import Spinners from "./Spinners";

const Search = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading] = useState(false);

  const { query } = useParams();
  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    getSearchResults(query, page).then((data) =>{
      setResults((prev) => [...prev, ...data.results]);
      setLoading(false);
    });
  }, [query, page]);

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
    <section className="search">
      <h4>Search results for "{query}".</h4>
      <div className="search_container">
        {results.map((item, index) => (
          <Cards
            key={index}
            image={item?.poster_path}
            titleName={
              item?.name ||
              item?.original_name ||
              item?.title ||
              item?.original_title
            }
            releaseDate={
              item?.release_date || item?.first_air_date || "2023-01-01"
            }
            ID={item?.id}
            mediaType={item?.media_type}
          />
        ))}
        {loading && <Spinners loading={loading}/>}
      </div>
    </section>
  );
};

export default Search;
