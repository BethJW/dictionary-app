import React from "react";

export default function DefinitionBody(props) {
  return (
    <div className="definitionBody">
      <h2 className="word">
        {" "}
        {props.data.word}{" "}
        <span className="phonetic">{props.data.phonetic}</span>{" "}
      </h2>
    </div>
  );
}
