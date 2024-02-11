import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div>
        <span>{props.phonetic.text}</span> <br /> <br />
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
          className="audio"
        />
      </div>
    );
  } else {
    return props.phonetic.text;
  }
}
