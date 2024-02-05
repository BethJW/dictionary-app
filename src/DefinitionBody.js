import React from "react";

export default function DefinitionBody(props) {
  return (
    <div className="definitionBody">
      <h2 className="word">
        {props.data.word}{" "}
        <span className="phonetic">{props.data.phonetic}</span>
      </h2>
      <div className="meaning">
        <h3>{props.data.definitionObject}</h3>
      </div>
    </div>
  );
}
