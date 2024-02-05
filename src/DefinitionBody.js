import React from "react";
import Meaning from "./Meanings";
export default function DefinitionBody(props) {
  if (props.data) {
    return (
      <div className="definitionBody">
        <h2 className="word">
          {props.data.word}{" "}
          <span className="phonetic">{props.data.phonetic}</span>
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
