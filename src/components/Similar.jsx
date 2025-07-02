import { useState, useEffect } from "react";
import Cards from "./Cards";
import { getSimilar } from "../utils/requests";

const Similar = ({ mediaType, id }) => {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    getSimilar(mediaType, id).then((data) => setSimilar(data?.results));
  }, [mediaType, id]);

  return (
    <div className="similar">
      <h3>Similar</h3>
      <div>
        {similar?.map((item,index) => (
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
            mediaType={mediaType}
          />
        ))}
      </div>
    </div>
  );
};

export default Similar;
