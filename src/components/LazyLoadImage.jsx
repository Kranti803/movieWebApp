import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoading = ({ className,src }) => {
  return (
    <LazyLoadImage
      alt=""
      src={src}
      className={className || ""}
      effect="blur"
    />
  );
};

export default LazyLoading;
