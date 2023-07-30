import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { getRecommendations } from './../utils/requests';

const Recommendations = ({ mediaType, id }) => {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    getRecommendations(mediaType, id).then((data) => setRecommendations(data?.results));
  }, [mediaType, id]);

  return (
      <div className="recommendations">
      <h3>Recommendations</h3>
      <div>
        {recommendations?.map((item) => (
          <Cards
            key={item?.id}
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
            mediaType={mediaType}
          />
        ))}
      </div>
    </div>
  );
};
export default Recommendations;
