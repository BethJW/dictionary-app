import React from "react";
import "./Photos.css";
export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="definition"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
