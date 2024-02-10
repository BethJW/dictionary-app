import React from "react";
import Sound from "./audio.png";
import "./Phonetic.css";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span>
      {props.phonetic.text}
      <a href={props.phonetic.audio} target="_blank">
        <img src={Sound} alt="sound" className="audio" />
      </a>
    </span>
  );
}
