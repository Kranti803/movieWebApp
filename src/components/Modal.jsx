import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from 'react-player/youtube';

const Modal = ({Key,setPopUp}) => {
  
  return (
    <div className="modal">
      <div className="closeBtn">
        <button className="btn" onClick={()=>setPopUp(false)}>
            <AiOutlineClose size={25}/>
        </button>
      </div>
      <div className="videoPlayer">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${Key}`}
      width='100%'
      height='100%'
      controls={true}
      playing={true}
       />
      </div>
    </div>
  );
};

export default Modal;
