import ClipLoader from "react-spinners/ClipLoader";

const Spinners = ({ color="#CF0", loading }) => {
 
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinners;
