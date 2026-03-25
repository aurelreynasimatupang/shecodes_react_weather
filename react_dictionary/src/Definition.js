import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definition(param) {
  if (param.word.word !== "") {
    return (
      <div className="Definition">
        <h2>{param.word.word}</h2>
        {param.word.phonetics.map(function (item, key) {
          return <Phonetics phone={item} />;
        })}
        <div className="Speeches">
          {param.word.meanings.map(function (item, key) {
            return <Meaning meaning={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <h3>Type a word.</h3>;
  }
}
