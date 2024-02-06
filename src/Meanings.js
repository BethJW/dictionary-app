import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning} />
    </div>
  );
}
