import React, { useEffect, useState } from "react";
import user from "../assets/user.jpg";
import { getTopCasts } from "./../utils/requests";
import LazyLoading from "./LazyLoadImage";

const Casts = ({ mediaType, id }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getTopCasts(mediaType, id).then((data) => setCasts(data?.cast));
  }, [mediaType, id]);
  return (
    <div className="casts">
      <h3>Top Casts</h3>
      <div className="casts_container">
        {casts?.map((item,index) => (
          <div key={index}>
              <LazyLoading
              className={"casts_img"}
                src={
                  item?.profile_path
                    ? `https://image.tmdb.org/t/p/original${item?.profile_path}`
                    : user
                }
              />
            <div>
              <h4>{item?.name || item?.original_name}</h4>
              <span>{item?.known_for_department}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casts;
