import React from "react";

export default function Gallery(param) {
  if (param.image.length !== 0 && param.image) {
    return (
      <div className="Gallery">
        {param.image.map(function (item, key) {
          return <img className="image" src={item.src.small} alt={item.alt} />;
        })}
      </div>
    );
  }
  return "";
}
