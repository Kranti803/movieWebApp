import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsResults, getTrailer } from "./../utils/requests";
import Modal from "./Modal";
import DetailSection from "./DetailSection";
import Casts from "./Casts";
import Similar from "./Similar";
import Recommendations from "./Recommendations";


const Details = () => {
  const [details, setDetails] = useState([]);
  const [trailerKey, setTrailerKey] = useState([]);
  const { mediaType, id } = useParams();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    getDetailsResults(mediaType, id).then((data) => setDetails(data));
    getTrailer(mediaType, id).then((data) => setTrailerKey(data));
  }, [mediaType, id]);

  return (
    <section className="details_page">
      <DetailSection details={details} setPopUp={setPopUp} />
      {popUp && <Modal Key={trailerKey[0]?.key} setPopUp={setPopUp} />}
      <Casts mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </section>
  );
};

export default Details;
