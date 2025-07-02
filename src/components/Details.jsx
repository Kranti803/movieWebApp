import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsResults, getTrailer } from "./../utils/requests";
import Modal from "./Modal";
import DetailSection from "./DetailSection";
import Casts from "./Casts";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [trailerKey, setTrailerKey] = useState([]);
  const { mediaType, id } = useParams();
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getDetailsResults(mediaType, id).then((data) => setDetails(data));
    getTrailer(mediaType, id).then((data) => setTrailerKey(data));
  }, [mediaType, id]);

  ///redirecting to notFound page when id is not found..
  if (!details) {
    navigate("/*");
  }

  return (
    <section className="details_page">
      <DetailSection details={details} setPopUp={setPopUp} id={id} mediaType={mediaType} />
      {popUp && <Modal Key={trailerKey[0]?.key} setPopUp={setPopUp} />}
      <Casts mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </section>
  );
};

export default Details;
