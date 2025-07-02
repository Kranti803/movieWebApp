import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsResults } from "./../utils/requests";
import DetailSection from "./DetailSection";
import Casts from "./Casts";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const { mediaType, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailsResults(mediaType, id).then((data) => setDetails(data));
  }, [mediaType, id]);

  ///redirecting to notFound page when id is not found..
  if (!details) {
    navigate("/*");
  }

  return (
    <section className="details_page">
      <DetailSection details={details} id={id} mediaType={mediaType} />
      <Casts mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </section>
  );
};

export default Details;
