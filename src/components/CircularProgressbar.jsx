import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ vote }) => {
    const percentageData = Math.ceil(vote * 10);
    return (
      <div className="progressbar" style={{ width: 75, height: 75 }}>
        <CircularProgressbar
          value={percentageData}
          text={`${percentageData}%`}
          background
          styles={{
            path: {
              stroke: `rgba(109, 182, 0, ${percentageData / 10})`,
              strokeLinecap: "round",
              transition: "stroke-dashoffset .8s ease .5s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "white",
              fontSize: "23px",
            },
            background: {
              fill: "transparent",
            },
          }}
        />
      </div>
    );
  };

export default CircularProgressBar;