import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsResults } from "../utils/requests";

const Player = () => {
  const [details, setDetails] = useState([]);
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);
  const { mediaType, id } = useParams();
  console.log(details);

  useEffect(() => {
    if (mediaType === "tv") {
      getDetailsResults(mediaType, id).then((data) => setDetails(data));
    }
  }, [mediaType, id, season, episode]);
  return (
    <div className="player">
      {mediaType === "tv" ? (
        <>
          <iframe
            // src={`https://player.autoembed.cc/embed/${mediaType}/${id}/${season}/${episode}?server=8`}

            src={`https://moviesapi.club/${mediaType}/${id}-${season}-${episode}?server=8`}
            title="myTitle"
            allowFullScreen
          ></iframe>
          <div>
            {details?.seasons?.map((season) => (
              <div key={season?.season_number}>
                <aside>
                  <p>
                    {season?.name?.toUpperCase()}
                    <span>
                      {`${new Date(`${season?.air_date}`).toLocaleString(
                        "en-US",
                        {
                          month: "short",
                        }
                      )},${new Date(
                        `${season?.air_date}`
                      ).getDate()},${new Date("2021-09-17").getFullYear()}`}
                    </span>
                  </p>
                </aside>
                <aside>
                  <div>
                    {[...new Array(season?.episode_count).keys()].map(
                      (index) => (
                        <input
                          key={index}
                          type="button"
                          value={`Episode - ${index + 1}`}
                          onClick={() => {
                            setSeason(season?.season_number);
                            setEpisode(index + 1);
                          }}
                        />
                      )
                    )}
                  </div>
                </aside>
              </div>
            ))}
          </div>
        </>
      ) : (
        <iframe
          // src={`https://player.autoembed.cc/embed/${mediaType}/${id}?server=8`}
          // src={`https://moviesapi.club/${mediaType}/${id}`}
          // src={`https://vidlink.pro/${mediaType}/${id}`}
          src={`https://moviesapi.club/${mediaType}/${id}`}
          title="myTitle"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Player;
