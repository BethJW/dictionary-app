import React from "react";
import Meaning from "./Meanings";
import Phonetic from "./Phonetic";
export default function DefinitionBody(props) {
  if (props.data) {
    return (
      <div className="definitionBody">
        <h2 className="word">
          {props.data.word}{" "}
          {props.data.data.phonetics.map(function (phonetic, index) {
            return (
              <span className="phonetic" key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </h2>

        {props.data.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
