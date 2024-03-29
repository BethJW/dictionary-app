import React from "react";
import "./synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
